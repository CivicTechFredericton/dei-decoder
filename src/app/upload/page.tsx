// app/upload/page.tsx

"use client";

import { DocumentIcon } from "@heroicons/react/24/outline"; // v2 path for outline icons

import { useState, ChangeEvent, FormEvent, useRef } from "react";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [revisedData, setRevisedData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handler to trigger the hidden file input
  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setText(""); // Clear text input if a file is selected
    }
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setFile(null); // Clear file input if text is entered
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!file && text.trim() === "") {
      alert("Please upload a file or enter some text.");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    if (file) {
      formData.append("file", file);
    } else if (text.trim() !== "") {
      formData.append("text", text);
    }

    try {
      const response = await fetch("/api/llama", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: text }), // Adjusted body format
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        alert(result["response"]);
        setRevisedData(result["response"]);
        // Optionally, handle the response data
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {/* Adjusted the width to accommodate horizontal layout */}
        <h1 className="text-3xl font-bold mb-6 text-center text-slate-600">
          DEI
        </h1>
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-600">
          Gender Decoder
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 items-center">
          {/* Horizontal Flex Layout for Upload File and Enter Text */}
          <div className="flex flex-row space-x-6">
            {/* Box 1: Upload Text File */}
            <div className="w-1/3">
              <div
                onClick={handleBoxClick}
                className={`border-2 border-dashed border-gray-300 p-2 rounded cursor-pointer flex items-center justify-center flex ${
                  file ? "border-blue-500" : ""
                }`}
              >
                {file ? (
                  <span className="text-gray-800">
                    Selected File: {file.name}
                  </span>
                ) : (
                  <span className="text-gray-500">
                    Click to upload text file
                  </span>
                )}
              </div>
              {/* Hidden File Input */}
              <input
                type="file"
                accept=".pdf"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Box 2: Enter Text */}
            <div className="w-1/3">
              {/* <label htmlFor="text" className="mb-2 font-medium text-slate-600">
              Enter text
            </label> */}
              <div className="border-2 border-dashed border-gray-300 p-2 rounded cursor-pointer flex items-center justify-center flex">
                <textarea
                  id="text"
                  value={text}
                  onChange={handleTextChange}
                  rows={2}
                //   className="border border-gray-300 p-2 rounded resize-none text-black w-full"
                  placeholder="Type your text here..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Display revised data */}
          <div className="flex flex-col mt-6">
            <label className="mb-2 font-medium text-slate-600">
              Revised Text
            </label>
            <div className="border border-gray-300 p-4 rounded bg-white">
              {revisedData ? (
                <p className="text-black">{revisedData}</p>
              ) : (
                <p className="text-black">
                  Your revised text will appear here...
                </p>
              )}
            </div>
          </div>

          {/* Box 3: Go Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Processing..." : "Go"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;

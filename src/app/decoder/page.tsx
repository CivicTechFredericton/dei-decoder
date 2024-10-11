// app/decoder/page.tsx

"use client";
import Image from "next/image";

import Link from "next/link";

import { useState, ChangeEvent, FormEvent, useRef } from "react";

import Layout from "../components/Layout";

const downSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
`;

const decoder = () => {
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

  const handleLinkChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
        // alert(result["response"]);
        setRevisedData(result["response"]);
        ``;
        // Optionally, handle the response data
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex justify-center bg-gray-50 p-8">
        <div className="m-20">
          {/* Adjusted the width to accommodate horizontal layout */}
          <h1 className="text-3xl font-bold m-5 text-center text-slate-600">
            DEI
          </h1>
          {/* Horizontal Flex Layout for Upload File and Enter Text */}
          <div className="flex flex-row space-x-6 cursor-pointer items-center justify-center">
            {/* Box 1: Upload File */}
            <Link href="/decoder/textdecoder" passHref>
              <div className="border-2 border-gray-200 p-4 rounded-xl ">
                <Image
                  src="/icons/Document_Icon_msword.png"
                  alt="Document Icon"
                  width={20} // Replace with your icon's width
                  height={20} // Replace with your icon's height
                  className="mb-5 mt-2"
                />
                <span className="text-gray-500">Choose a file to upload</span>
              </div>
            </Link>

            {/* Box 2: Enter Text */}
            <div className=" border-2 border-gray-200 p-4 rounded-xl ">
              <Link href="/decoder/textdecoder" passHref>
                <Image
                  src="/icons/Document_Icon_TXT.png"
                  alt="Document Icon"
                  width={20} // Replace with your icon's width
                  height={20} // Replace with your icon's height
                  className="mb-5 mt-2"
                />
                <span className="text-gray-500">Enter Job description</span>
              </Link>
            </div>

            {/* Box 3: Enter Link and scan document */}
            <div className=" border-2 border-gray-200 p-4 rounded-xl ">
              <Link href="/decoder/textdecoder" passHref>
                <Image
                  src="/icons/URL_Link.png"
                  alt="Document Icon"
                  width={20} // Replace with your icon's width
                  height={20} // Replace with your icon's height
                  className="mb-5 mt-2"
                />
                <span className="text-gray-500">Copy and paste URL link</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default decoder;

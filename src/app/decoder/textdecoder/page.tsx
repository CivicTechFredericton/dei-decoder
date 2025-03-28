"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";

interface Query {
  input: string;
  output: string;
  flaggedKeywords: string[];
}

export default function TextDecoder() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [flaggedKeywords, setFlaggedKeywords] = useState<string[]>([]);
  const [suggestedText, setSuggestedText] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [queries, setQueries] = useState<Query[]>([]);

  const handleProcess = async () => {
    if (inputText === "") {
      setErrorMessage("Enter valid job posting");
      return;
    } else if (inputText.length < 100) {
      setErrorMessage(
        "Please enter a job description more than 100 characters"
      );
      return;
    } else if (inputText.length > 3000) {
      setErrorMessage(
        "Your job description is too large. Below 3000 characters"
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/llama", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputText }),
      });

      const result = await response.json();

      if (result) {
        const processedOutput = result;
        const keywords = processedOutput.flagged_words;
        const suggestions = processedOutput.suggestions;
        const revisedjobposting = processedOutput.revisedjobposting;

        setOutputText(revisedjobposting);

        setFlaggedKeywords(keywords);
        setSuggestedText(suggestions);
        setQueries((prevQueries) => [
          ...prevQueries,
          {
            input: inputText,
            output: outputText,
            flaggedKeywords: keywords,
          },
        ]);
        setErrorMessage("");
      } else {
        setErrorMessage("AI model is not reachable");
        console.log("Something went wrong.");
      }
    } catch (error) {
      setErrorMessage("Error" + error);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDocGeneration = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/documentgenerator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: outputText }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Job_Posting.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  const highlightKeywords = (text: string, keywords: string[]) => {
    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
    return (
      <span style={{ whiteSpace: "pre-wrap" }}>
        {parts.map((part, index) =>
          keywords.includes(part.toLowerCase()) ? (
            <span
              key={index}
              style={{
                color: "red",
                fontWeight: "bold",
                transition: "color 3s ease",
              }}
            >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <>
      <div className="flex">
        <Sidebar
          queries={queries}
          onSelectQuery={(query) => {
            setInputText(query.input);
            setOutputText(query.output);
            setFlaggedKeywords(query.flaggedKeywords);
          }}
        />
        <main className="flex-1 p-10">
          <div className="flex flex-col lg:flex-row w-full max-w-7xl space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex-1">
              <label className="block text-lg font-semibold mb-2">
                Input Job posting
              </label>

              {outputText ? (
                <div className="w-full h-96 p-4 border rounded-md overflow-y-auto">
                  {highlightKeywords(inputText, flaggedKeywords)}
                </div>
              ) : (
                <div>
                  <textarea
                    id="inputText"
                    className={`w-full h-96 p-4 border rounded-md overflow-y-auto ${
                      errorMessage ? "border-red-700" : ""
                    }`}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste your text here..."
                  />
                </div>
              )}
              <button
                onClick={handleProcess}
                className={`w-1/2 bg-blue-200 p-5 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze job posting"}
              </button>
              {errorMessage != "" && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
            </div>

            <div className="flex-1">
              {/* Div for Download full revised doc and Suggested new words */}{" "}
              <label
                htmlFor="outputText"
                className="block text-lg font-semibold mb-2"
              >
                Revised Job posting
              </label>
              <span style={{ whiteSpace: "pre-wrap" }}>
                <textarea
                  id="inputText"
                  className="w-full h-96 p-4 border rounded-md"
                  value={outputText}
                  onChange={(e) => setOutputText(e.target.value)}
                  placeholder="The new AI generated text will appear here"
                />
              </span>
              {outputText && (
                <button
                  onClick={handleDocGeneration}
                  className={`w-1/2 bg-blue-200 border text-black-700 p-5 rounded-xl hover:bg-black-700 transition duration-200 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading
                    ? "Generating please wait..."
                    : "Download revised job posting"}
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

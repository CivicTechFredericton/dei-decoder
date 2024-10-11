"use client";

import { useState } from "react";
import Layout from "../../components/Layout";
import Sidebar from "@/app/components/Sidebar";

interface Query {
  input: string;
  output: string;
}

export default function TextDecoder() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [llmText, setllmText] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [queries, setQueries] = useState<Query[]>([]);

  const handleProcess = async () => {
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
      if (response.ok) {
        const processedOutput = result["response"];
        setOutputText(processedOutput);
        // Append to queries with both input and processed output
        setQueries((prevQueries) => [
          ...prevQueries,
          { input: inputText, output: processedOutput },
        ]);
      } else {
        console.log("Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  

  // Update inputText and outputText when a sidebar item is clicked
  const handleSelectQuery = (query: Query) => {
    setInputText(query.input);
    setOutputText(query.output);
  };

  return (
    <Layout>
      <div className="flex">
        <Sidebar queries={queries} onSelectQuery={handleSelectQuery} />

        <main className="flex-1 w-full min-h-screen flex-col p-10 items-center justify-center space-y-6">
          <div className="flex w-full max-w-5xl space-x-4">
            <div className="flex-1">
              <label
                htmlFor="inputText"
                className="block text-lg font-semibold mb-2"
              >
                Input Text
              </label>
              <textarea
                id="inputText"
                className="w-full h-96 p-4 border rounded-md"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your text here..."
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="outputText"
                className="block text-lg font-semibold mb-2"
              >
                Output Text
              </label>
              <textarea
                id="outputText"
                className="w-full h-96 p-4 border rounded-md"
                value={outputText}
                readOnly
                placeholder="Result will appear here..."
              />
            </div>
          </div>
          <button
            onClick={handleProcess}
            className={`w-1/4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </main>
      </div>
    </Layout>
  );
}

"use client";

import { useState } from "react";
import Layout from "../../components/Layout";

export default function TextDecoder() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  

  const handleProcess = () => {
    // Simulate processing the input text
    const processedText = inputText.toUpperCase(); // Replace with actual processing logic
    setOutputText(processedText);
  };

  return (
    <Layout>
      <main className="min-h-screen flex flex-col items-center justify-center p-10 space-y-6">
        //Todo
        <h1>Document upload implementation</h1>
      </main>
    </Layout>
  );
}

import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      {/* need to find a better way than h-[calc(100vh-_106px)] trying to get it so the copyright is visible after the first scroll */}
      <main className="min-h-screen flex items-center justify-center p-10">
        <div className="w-full max-w-[567px] flex flex-col justify-center text-theme-2 text-justify pr-10 md:pr-28 border-r-2">
          <h1 className="text-2xl font-semibold mb-7">About this tool</h1>
          <p className="mb-5">
            At DEI Decoder, we believe that every organization has the potential
            to foster diversity, equity, and inclusion (DEI) through clear and
            thoughtful communication. However, unconscious bias and outdated
            language can undermine your efforts, creating barriers to true
            inclusivity. That’s where we come in.
          </p>
          <p className="mb-5">
            Our innovative platform analyzes your content—whether it’s a job
            posting, internal memo, or public statement—and identifies areas
            where bias may exist. Using Artificial Intelligence and Large
            Language Models (LLM), the DEI Decoder flags problematic language,
            suggests improvements, and provides a comprehensive score that
            reflects your content's inclusivity.
          </p>
          <p>
            Whether you’re a large corporation or a growing startup, our tool is
            designed to help you craft language that resonates with all
            communities. You’ll receive instant feedback, tailored to ensure
            that your communications promote equal opportunities and
            representation.
          </p>
        </div>
      </main>
    </Layout>
  );
}

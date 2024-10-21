import React from "react";

export default function About() {
  return (
    <>
      <main className="flex min-h-[calc(100vh-60px)] justify-center items-center">
        <div className="flex flex-col w-[676px] items-center">
          <h1 className="text-4xl font-extrabold text-main-color mb-10">
            About this tool
          </h1>

          <div className="w-full max-w-[676px] flex flex-col justify-center text-main-color text-justify px-20  border-r-2 text-lg">
            <p className="mb-5">
              At DEI Decoder, we believe that every organization has the
              potential to foster diversity, equity, and inclusion (DEI) through
              clear and thoughtful communication. However, unconscious bias and
              outdated language can undermine your efforts, creating barriers to
              true inclusivity. <strong>That’s where we come in.</strong>
            </p>
            <p className="mb-5">
              Our innovative platform analyzes your content—whether it’s a job
              posting, internal memo, or public statement—and identifies areas
              where bias may exist. Using Artificial Intelligence and Large
              Language Models (LLM), the DEI Decoder flags problematic language,
              suggests improvements, and provides a comprehensive score that
              reflects your content’s inclusivity.
            </p>
            <p>
              Whether you’re a large corporation or a growing startup, our tool
              is designed to help you craft language that resonates with all
              communities. You’ll receive instant feedback, tailored to ensure
              that your communications promote equal opportunities and
              representation.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

import React from "react";
import FaqAccordion from "../components/FaqAccordion";

export default function Faq() {
  return (
    <>
      <main className="min-h-[calc(100vh-90px)] flex text-center pt-20 justify-center pb-28">
        <div className = "flex flex-col w-[676px] mx-10">
          <h1 className="text-4xl font-extrabold text-main-color mb-3">FAQs</h1>
          <p className="text-2xl font-semibold text-sub-color mb-10">Frequently Asked Questions</p>

          <FaqAccordion 
            index={1} 
            question="What is the DEI Decoder?" 
            answer="
              The DEI Decoder is a powerful tool that analyzes your content—such as job postings, 
              emails, or public communications—for Diversity, Equity, and Inclusion (DEI) compliance. 
              It identifies bias and suggests actionable recommendations to help you create more inclusive content."
          />

          <FaqAccordion 
            index={2} 
            question="How does the DEI Decoder work?" 
            answer="
              The DEI Decoder uses advanced algorithms based on DEI best practices. 
              Simply upload or input your content, and within seconds, it scans for bias, 
              highlights problematic language, and provides recommendations for improvement."
          />

          <FaqAccordion 
            index={3} 
            question="What types of content can the DEI Decoder analyze?" 
            answer="
              The DEI Decoder can analyze a wide range of written content, including job postings, 
              internal communications, public statements, marketing materials, and more."
          />

          <FaqAccordion 
            index={4} 
            question="How accurate is the DEI Decoder?" 
            answer="
              Our tool is built on DEI research and continuously updated with the latest best practices. 
              While no tool can replace human judgment, the DEI Decoder offers highly accurate results to help guide your content towards inclusivity."
          />

          <FaqAccordion 
            index={5} 
            question="How long does it take to analyze my content?" 
            answer="
              Analysis happens in real-time. Within seconds of submitting your content, 
              you’ll receive a detailed report highlighting gaps and providing suggestions for improvement."
          />

          <FaqAccordion 
            index={6} 
            question="Can I download the analysis report?" 
            answer="
              Yes, you can download a comprehensive DEI report for your content, 
              which includes flagged issues, suggestions, and the overall DEI score."
          />

          <FaqAccordion 
            index={7} 
            question="Is the DEI Decoder secure?" 
            answer="
              Absolutely. We prioritize the security and privacy of our users. 
              All data uploaded to the DEI Decoder is encrypted and handled in compliance with industry security standards."
          />

          <FaqAccordion 
            index={8} 
            question="Do I need a subscription to use the DEI Decoder?" 
            answer="
              The DEI Decoder offers both free and premium plans. 
              You can try basic features for free or subscribe to one of our premium plans to access advanced DEI analysis and detailed reporting."
          />

          <FaqAccordion 
            index={9} 
            question="How do I get started?" 
            answer="
              It’s easy! Click on ”Get Started” on our homepage, create an account, 
              and begin analyzing your content right away."
          />

          <FaqAccordion 
            index={10} 
            question="Can I use the DEI Decoder for ongoing content reviews?" 
            answer="
              Yes, many of our users integrate the DEI Decoder into their regular workflows to continuously review content for DEI compliance."
          />
        </div>
      </main>
    </>
  );
}
import React from "react";
import Layout from "../components/Layout";
import FaqAccordion from "../components/FaqAccordion";

export default function About() {
  return (
    <Layout>
      <main className=" min-h-[calc(100vh-_106px)] flex text-center pt-32 justify-center pb-28">
        <div className = "flex flex-col  w-[676px]">
          <h1 className="text-3xl font-extrabold text-theme-2 mb-3">FAQs</h1>
          <p className="text-2xl font-semibold text-theme-2 mb-24">Frequently Asked Questions</p>

          <FaqAccordion 
            index={1} 
            question="Question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit lectus nisi. 
                  Pellentesque vel metus a ex finibus consectetur eu id metus. Nam sed ipsum quis mi molestie sollicitudin a vel ipsum. 
                  Sed in malesuada velit. Phasellus sed vulputate quam. Donec in ligula ac diam bibendum maximus a at velit. 
                  Vestibulum in est vel massa hendrerit pharetra. Duis egestas enim ligula, in euismod velit dictum in. Etiam auctor aliquam nulla ac faucibus. Nullam vel venenatis justo. Proin sit amet nulla nulla. Etiam."
          />

          <FaqAccordion 
            index={2} 
            question="Question 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit lectus nisi." 
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit lectus nisi. 
                  Pellentesque vel metus a ex finibus consectetur eu id metus. Nam sed ipsum quis mi molestie sollicitudin a vel ipsum. 
                  Sed in malesuada velit. Phasellus sed vulputate quam. Donec in ligula ac diam bibendum maximus a at velit."
          />

          <FaqAccordion 
            index={3} 
            question="Question 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit lectus nisi."
          />

          <FaqAccordion 
            index={4} 
            question="Question 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit lectus nisi. 
                  Pellentesque vel metus a ex finibus consectetur eu id metus. Nam sed ipsum quis mi molestie sollicitudin a vel ipsum. 
                  Sed in malesuada velit. Phasellus sed vulputate quam. Donec in ligula ac diam bibendum maximus a at velit. 
                  Vestibulum in est vel massa hendrerit pharetra. Duis egestas enim ligula, in euismod velit dictum in. Etiam auctor aliquam nulla ac faucibus. Nullam vel venenatis justo. Proin sit amet nulla nulla. Etiam."
          />

          <FaqAccordion 
            index={5} 
            question="Question 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit lectus nisi. 
                  Pellentesque vel metus a ex finibus consectetur eu id metus. Nam sed ipsum quis mi molestie sollicitudin a vel ipsum. 
                  Sed in malesuada velit. Phasellus sed vulputate quam. Donec in ligula ac diam bibendum maximus a at velit. 
                  Vestibulum in est vel massa hendrerit pharetra. Duis egestas enim ligula, in euismod velit dictum in. Etiam auctor aliquam nulla ac faucibus. Nullam vel venenatis justo. Proin sit amet nulla nulla. Etiam."
          />
        </div>
      </main>
    </Layout>
  );
}
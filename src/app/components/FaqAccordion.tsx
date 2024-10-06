
'use client'
import React from 'react'

function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);
    
    const icon = document.getElementById(`icon-${index}`);
 
    // SVG for Down icon
    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
      </svg>
    `;
 
    // SVG for Up icon
    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
      </svg>
    `;
 
    if(content !== null && icon !== null) {
      // Toggle the content's max-height for smooth opening and closing
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        content.style.borderBottomWidth = '1px';
        icon.innerHTML = downSVG;
      } 
      else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.borderBottomWidth = '0px';
        icon.innerHTML = upSVG;
      }
    }
  }



const FaqAccordion = ({index, question, answer}: {index: number, question: string, answer: string}) => {
  return (
    <>
        <button onClick={() => toggleAccordion(index)} className="w-full flex justify-between items-center py-5 text-theme-2 text-left text-sm">
            <span>{question}</span>
            <span id={`icon-${index}`} className="text-theme-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            </span>
        </button>

        <div className="">

            <div id={`content-${index}`} className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out border-b border-b-[#808080] border-opacity-20">
                <div className="p-3 text-sm text-theme-2 text-opacity-85 bg-theme-4 bg-opacity-85 text-left rounded-b-xl">
                {answer}
                </div>
            </div>
        </div>
    </>
  )
}

export default FaqAccordion

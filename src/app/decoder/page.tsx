// app/decoder/page.tsx

"use client";
import Image from "next/image";
import Link from "next/link";

const Decoder = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center bg-gray-50 p-4 md:p-8">
        <div className="m-4 w-full max-w-2xl">
          {/* Adjusted the width to accommodate horizontal layout */}
          <h1 className="text-3xl font-bold mb-6 text-center text-slate-600 md:mt-60 ">
            Choose your document format
          </h1>
          {/* Responsive layout for mobile */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 cursor-pointer items-center justify-center">
            {/* Box 1: Upload File */}
            <Link href="/decoder/textdecoder" passHref>
              <div className="border-2 border-gray-200 p-4 rounded-xl w-full md:w-auto text-center">
                <Image
                  src="/icons/Document_Icon_msword.png"
                  alt="Document Icon"
                  width={32} // Reduced size for better mobile visibility
                  height={32} // Reduced size for better mobile visibility
                  className="mb-4 mt-2 mx-auto"
                />
                <span className="text-gray-500">Choose a file to upload</span>
              </div>
            </Link>

            {/* Box 2: Enter Text */}
            <Link href="/decoder/textdecoder" passHref>
              <div className="border-2 border-gray-200 p-4 rounded-xl w-full md:w-auto text-center">
                <Image
                  src="/icons/Document_Icon_TXT.png"
                  alt="Document Icon"
                  width={32} // Reduced size for better mobile visibility
                  height={32} // Reduced size for better mobile visibility
                  className="mb-4 mt-2 mx-auto"
                />
                <span className="text-gray-500">Enter Job description</span>
              </div>
            </Link>

            {/* Box 3: Enter Link and scan document */}
            <Link href="/decoder/textdecoder" passHref>
              <div className="border-2 border-gray-200 p-4 rounded-xl w-full md:w-auto text-center">
                <Image
                  src="/icons/URL_Link.png"
                  alt="Link Icon"
                  width={32} // Reduced size for better mobile visibility
                  height={32} // Reduced size for better mobile visibility
                  className="mb-4 mt-2 mx-auto"
                />
                <span className="text-gray-500">Copy and paste URL link</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Decoder;

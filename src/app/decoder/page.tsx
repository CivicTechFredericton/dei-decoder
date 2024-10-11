// app/decoder/page.tsx

"use client";
import Image from "next/image";

import Link from "next/link";

import { useState, ChangeEvent, FormEvent, useRef } from "react";

import Layout from "../components/Layout";

const decoder = () => {
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

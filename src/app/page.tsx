"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline"; // v2 path for outline icons
import "./globals.css";
import DemoNotification from "./components/DemoNotification";

const Home = () => {
  return (
    <>
      <DemoNotification />
      {/* Add overflow-hidden to prevent unwanted scroll */}
      <div className="min-h-[calc(100vh-90px)] flex flex-col justify-center items-center bg-gradient-to-r bg-white overflow-hidden">
        <main className="flex flex-col text-center items-center justify-center relative">
          {/* Ensure gradient doesn't cause overflow */}
          <div className="gradient z-0"></div>

          <h2 className="mx-3 md:mx-8 mb-8 text-2xl md:text-4xl font-bold text-main-color max-w-[1000px] h-auto leading-relaxed md:leading-[54px] z-10">
            Ensure your communications reflect your commitment to diversity,
            equity, and inclusion by analyzing bias in your job postings,
            communications, and more.
          </h2>

          <p className="md:text-xl text-sub-color max-w-3xl h-auto leading-relaxed z-10">
            In seconds, the DEI Decoder will enable your organization to create
            more inclusive content by identifying gaps and providing actionable
            recommendations.
          </p>

          <Link href="/decoder" className="z-10">
            <button className="px-4 mt-8 py-3 w-[200px] md:w-[235px] h-[52px] bg-main-color text-white rounded-full flex items-center justify-between">
              <p className="text-lg md:text-xl font-bold text-center flex-grow">
                Try it now
              </p>
              <span className="ml-2 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-white text-main-color rounded-full">
                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Home;

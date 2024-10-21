import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline"; // v2 path for outline icons
import "./globals.css";

const Home = () => {
  return (
    <>
      {/* Add overflow-hidden to prevent unwanted scroll */}
      <div className="min-h-screen flex flex-col justify-center p-6 md:p-10 md:pt-60 bg-gradient-to-r bg-white overflow-hidden">
        <main className="flex flex-col text-center items-center justify-center relative">
          {/* Ensure gradient doesn't cause overflow */}
          <div className="gradient z-0"></div>

          <h2 className="mx-4 md:mx-8 mb-8 text-3xl md:text-4xl font-bold text-main-color max-w-3xl h-auto leading-relaxed md:leading-[54px] z-10">
            Ensure your communications reflect your commitment to diversity,
            equity, and inclusion by analyzing bias in your job postings,
            communications, and more.
          </h2>

          <p className="text-lg md:text-xl text-sub-color max-w-3xl h-auto leading-relaxed z-10">
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
        {/* Add margin-bottom or padding-bottom as needed to ensure the footer is just out of initial view */}
        <div className="mt-auto pb-32 md:pb-40 lg:pb-52"></div>
      </div>
    </>
  );
};

export default Home;

import Link from "next/link";
import Layout from "./components/Layout";
import { ArrowRightIcon } from "@heroicons/react/24/outline"; // v2 path for outline icons

const Home = () => {
  return (
    <Layout>
      {/* Using min-h-screen to ensure the content fills the height, and padding to account for footer space */}
      <div className="min-h-screen flex flex-col justify-center p-10 md:p-60 bg-gradient-to-r bg-white">
        <main className="flex flex-col text-center items-center justify-center">
          <h2 className="mx-8 mb-8 text-4xl font-bold text-main-color w-[1000px] h-auto leading-[54px]">
            Ensure your communications reflect your commitment to diversity,
            equity, and inclusion by analyzing bias in your job postings
            communications and more.
          </h2>
          <p className="text-xl text-sub-color w-[1000px] h-auto leading-[26px]">
            In seconds the DEI Decoder will enable your organization to create
            more inclusive content by identifying gaps and providing you
            actionable recommendations.
          </p>
          <Link href="/decoder">
            <button className="px-2 mt-8 py-3 w-[235px] h-[52px] bg-main-color text-white rounded-full flex items-center justify-between">
              <p className="text-xl font-bold text-center flex-grow">
                Try it now
              </p>
              <span className="ml-2 flex items-center justify-center w-9 h-9 bg-white text-main-color rounded-full">
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </main>
        {/* Add margin-bottom or padding-bottom as needed to ensure the footer is just out of initial view */}
        <div className="mt-auto pb-32 md:pb-40 lg:pb-52"></div>
      </div>
    </Layout>
  );
};

export default Home;

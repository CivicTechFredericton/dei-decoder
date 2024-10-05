import Link from "next/link";
import Layout from "./components/Layout";
import { ArrowRightIcon } from "@heroicons/react/24/outline"; // v2 path for outline icons

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col p-60 bg-gradient-to-r bg-white ">
        <main className=" flex flex-col text-center items-center justify-center">
          <h2 className="mx-8 text-3xl font-bold mb-4 text-gray-500">
            Ensure your communications reflect your commitment to diversity,
            equity, and inclusion by analyzing bias in your job postings
            communications and more
          </h2>
          <p className="text-gray-500">
            In seconds the DEI Decoder will enable your organization to create
            more inclusive content by identifying gaps and providing you
            actionable recommendations.
          </p>
          <Link href="/upload">
            <button className="px-6 mt-8 py-3 w-50 bg-gray-800 text-white rounded-full flex">
              Try it now
              <span className="ml-2 flex items-center justify-center w-6 h-6 bg-white text-gray-800 rounded-full">
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </button>
          </Link>
        </main>
      </div>
    </Layout>
  );
};

export default Home;

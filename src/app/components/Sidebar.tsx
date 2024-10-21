import React, { useState } from "react";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface Query {
  input: string;
  output: string;
  flaggedKeywords: string[];
}

interface SidebarProps {
  queries: Query[];
  onSelectQuery: (query: Query) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ queries, onSelectQuery }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle sidebar, visible on mobile */}
      <button className="lg:hidden flex pt-10 pl-5 text-black" onClick={toggleSidebar}>
        {/* Conditionally render the MenuIcon when sidebar is closed, and XIcon when it's open */}
        {isOpen ? (
          <XMarkIcon className="h-6 w-6 " /> // Close icon when sidebar is open
        ) : (
          <Bars2Icon className="h-6 w-6 " /> // Menu icon when sidebar is closed
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`lg:w-1/6 h-screen bg-gray-100 p-4 border-r overflow-y-auto fixed lg:relative transition-transform transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4">Query History <XMarkIcon className=" lg:hidden h-6 w-6 " /></h2>
        <ul>
          {queries.map((query, index) => (
            <li
              key={index}
              className="mb-2 p-2 bg-white rounded shadow cursor-pointer hover:bg-gray-200"
              onClick={() => {
                onSelectQuery(query);
                setIsOpen(false); // Close sidebar after selecting a query on mobile
              }}
            >
              <p className="text-sm">{query.input.substring(0, 10)}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay to close sidebar when clicked outside (for mobile view) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

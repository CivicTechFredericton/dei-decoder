import React from "react";

interface Query {
  input: string;
  output: string;
  flaggedKeywords:string[];
}

interface SidebarProps {
  queries: Query[];
  onSelectQuery: (query: Query) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ queries, onSelectQuery }) => {
  return (
    <aside className="w-1/6 h-screen bg-gray-100 p-4 border-r overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Query History</h2>
      <ul>
        {queries.map((query, index) => (
          <li
            key={index}
            className="mb-2 p-2 bg-white rounded shadow cursor-pointer hover:bg-gray-200"
            onClick={() => onSelectQuery(query)} // Pass specific query data
          >
            <p className="text-sm">{query.input.substring(0,10)}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

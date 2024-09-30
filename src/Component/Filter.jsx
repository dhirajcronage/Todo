import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div className="mb-5 w-[57%]">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 w-[54%]"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default Filter;

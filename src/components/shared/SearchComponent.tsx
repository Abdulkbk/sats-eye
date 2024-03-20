import React from "react";

const SearchComponent = () => {
  return (
    <main className="px-5 mt-5 flex w-full justify-evenly space-x-2">
      <label className="input input-bordered justify-evenly flex items-center gap-2 flex-1">
        <input type="text" className="grow" placeholder="Search" />
      </label>
      <button className="btn btn-neutral">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </main>
  );
};

export default SearchComponent;

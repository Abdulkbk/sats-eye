"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

enum ESearch {
  txid = "txid",
  bhash = "bhash",
  bheight = "bheight",
}

const SearchComponent = () => {
  const [searchType, setSearchType] = useState<ESearch>(ESearch.txid);
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();

  const handleSearch = () => {
    switch (searchType) {
      case ESearch.txid:
        router.push(`/trx/${searchValue}`);
        break;
      case ESearch.bheight:
        router.push(`/blocks/${searchValue}`);
        break;
      case ESearch.bhash:
        router.push(`/blocks/hash/${searchValue}`);
        break;
    }
  };

  return (
    <div className="w-full">
      <main className="px-5 mt-5 flex w-full justify-evenly space-x-2">
        <label className="input input-bordered justify-evenly flex items-center gap-2 flex-1">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <button className="btn btn-neutral" onClick={handleSearch}>
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
      <section className="w-full flex flex-col justify-center px-5 mt-3 space-y-1">
        <div className="flex justify-between w-36">
          <p>Txid</p>
          <input
            type="radio"
            name="radio-1"
            className="radio"
            defaultChecked
            onClick={() => setSearchType(ESearch.txid)}
          />
        </div>
        <div className="flex justify-between w-36">
          <p>Block height</p>
          <input
            type="radio"
            name="radio-1"
            className="radio"
            onClick={() => setSearchType(ESearch.bheight)}
          />
        </div>
        <div className="flex justify-between w-36">
          <p>Block hash</p>
          <input
            type="radio"
            name="radio-1"
            className="radio"
            onClick={() => setSearchType(ESearch.bhash)}
          />
        </div>
      </section>
    </div>
  );
};

export default SearchComponent;

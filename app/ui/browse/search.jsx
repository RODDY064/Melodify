"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Categories from "./categories";
import QueryFetch from "./query";

export default function Search({ categories }) {
  const params = useSearchParams();
  const Query = params.get("query");
  const [searching, setSearching] = useState(false);

  function SearchingQuery(action) {
    if (action && action.length > 0) {
     setSearching(true)
    }else{
    setSearching(false)
    }
  }

  useEffect(() =>{
   SearchingQuery(Query)
  },[Query]);

  return (
    <>
      {!searching ? (
        <>
          <h1 className="font-[600] text-3xl mt-10">Browse</h1>
          <div className="w-full bg-black/50 h-[1px] my-2 rounded-lg"></div>
          <div className="w-full p-5 grid grid-cols-3 grid-rows-4 gap-4 max-sm:grid-cols-2 max-sm:px-1">
            { categories.items.map((item, index) => (
              <Categories key={index} data={item} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="font-[600] text-3xl mt-10">
            Searching for "{Query}"
          </h1>
          <div className="w-full bg-black/50 h-[1px] my-2 rounded-lg"></div>
          <div className="w-full p-5  max-sm:px-1">
           <QueryFetch queryData={Query}/>
          </div>
        </>
      )}
    </>
  );
}

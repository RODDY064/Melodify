"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace, } = useRouter();

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <Link
        href="/browse"
        className="w-[75%] flex items-center  max-sm:w-full h-[3.2rem] bg-glass rounded-lg px-1">
        <span>
          <Image src="/icons/search.svg" width={50} height={50} alt="search" />
        </span>
        <input
          placeholder="Search"
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e)=>handleSearch(e.target.value)}
          className="w-full h-full p-2 bg-transparent focus:outline-none"
        ></input>
      </Link>
    </>
  );
}

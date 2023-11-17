"use client";



import { useState } from "react";
import ByAll from "./filter/byall";
import BySong from "./filter/bysong";
import ByArtist from "./filter/byartist";
import ByAlbum from "./filter/byalbum";


const filterBy = ["All", "Songs", "Artists", "Albums"];

export default function QueryFetch({ queryData }) {
  const [pages, setPages] = useState({
    index_1: true,
    index_2: false,
    index_3: false,
    index_4: false,
  });

  const handlePages = (num) => {
    setPages((prevPages) => {
      const newPages = Object.fromEntries(
        Object.keys(prevPages).map((key) => [key, false])
      );
      newPages[`index_${num + 1}`] = true;
      return newPages;
    });
  };

  
  return (
    <>
      <div className="w-full flex mb-3 gap-4">
        {filterBy.map((item, index) => (
            <div
            key={index}
            onClick={() => handlePages(index)} 
            className={`w-16 h-8 p-2 px-3 rounded-3xl ${pages[`index_${index + 1}`] ? 'bg-black text-cream' : 'bg-cream'} shadow-card cursor-pointer  flex items-center justify-center`}>
            <span className="text-sm ">{item}</span>
          </div>
        ))}
      </div>
      <div className="w-full my-4">
        {pages.index_1 && (<ByAll query={queryData}/>)}
        {pages.index_2 && (<BySong/>)}
        {pages.index_3 && (<ByArtist/>)}
        {pages.index_4 && (<ByAlbum/>)}
      </div>
    </>
  );
}

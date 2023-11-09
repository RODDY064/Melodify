"use client";

import Card from "./card";
import Image from "next/image";
import { useRef } from "react";
import ArtistCard from "./artistCard";

export default function PlaylistMoreLike({ cards }) {
  const sliderRef = useRef(null);
  const handleSlide = (action) => {
    switch (action) {
      case "next":
        if (sliderRef.current) {
          const containerWidth = sliderRef.current.clientWidth;
          sliderRef.current.scrollLeft += containerWidth;
        }
        break;
      case "prev":
        if (sliderRef.current) {
          const containerWidth = sliderRef.current.clientWidth;
          sliderRef.current.scrollLeft -= containerWidth;
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full px-1 py-2 md:p-2 my-8  overflow-hidden" id="boxes_2">
      <h3 className="text-lg font-[500]">More Like Drake</h3>
      <div className="w-full flex items-center justify-center">
        <div
          className="mx-1 hidden md:block opacity-0 cursor-pointer"
          id="small_boxes_2"
          onClick={() => handleSlide("prev")} >
          <Image src="/icons/arrow.svg" width={24} height={24} alt="arrow" />
        </div>
        <div className="w-full flex  justify-center overflow-hidden rounded-lg  hover:border border-cream/35">
          <div
            className="w-full flex gap-4 max-sm:gap-2 items-center flex-none p-2 overflow-x-auto"
            id="slider"
            ref={sliderRef}>
            {cards.map((item, index) => (
              <ArtistCard key={index} data={item}/>
            ))}
          </div>
        </div>
        <div
          className="mx-1 hidden md:block opacity-0 cursor-pointer"
          id="small_boxes_2"
          onClick={() =>handleSlide("next")}>
          <Image
            src="/icons/arrow.svg"
            width={24}
            height={24}
            alt="arrow"
            className="rotate-180"
          />
        </div>
      </div>
    </div>
  );
}

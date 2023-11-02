"use client";
import { useRef, useState } from "react";
import PlaylistAlbum from "./playlist-album";
import Image from "next/image";

export default function NewRelease() {
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

  const [hideBtn, setHideBtn] = useState(false);
  const handleHidden = () => {
    setTimeout(() => {
      setHideBtn(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col justify-center  rounded-lg overflow-hidden hover:border border-cream/35">
      <div
        className={`absolute ml-[-25px] ${
          hideBtn ? "opacity-100" : "opacity-0"
        } max-sm:hidden cursor-pointer`}
        onClick={() => handleSlide("prev")}>
        <Image src="/icons/next.svg" width={27} height={24} alt="prev" />
      </div>
      <div className="w-full flex items-center justify-center gap-4 flex-none ">
        <div
          className="w-full flex flex-none items-center gap-4  p-5 max-sm:p-3 overflow-x-auto  "
          id="slider"
          ref={sliderRef}
          onMouseEnter={() => setHideBtn(true)}
          onMouseLeave={handleHidden}>
          <PlaylistAlbum />
        </div>
      </div>
      <div
        className={`absolute ${
          hideBtn ? "opacity-100" : "opacity-0"
        }  right-4 max-sm:hidden cursor-pointer `}
        onClick={() => handleSlide("next")}>
        <Image
          src="/icons/next.svg"
          width={27}
          height={24}
          alt="next"
          className="rotate-180"
        />
      </div>
    </div>
  );
}

"use client";

import { extractPrecedingSentence } from "@app/utils/extract";
import Image from "next/image";

export default function Click({ word }) {
  return (
    <div className="w-full hidden  justify-between h-[100px] rounded-tr-2xl rounded-tl-2xl rounded-lg backdrop-blur-lg bg-ice/30 p-4" id='card_tab'>
      <h2 className="text-black/70  font-medium hover:text-black mr-4">
        {extractPrecedingSentence(word,"Cover")}
      </h2>
      <div className="w-24">
        <div
          className="w-16 h-16 rounded-full bg-black  cursor-pointer">
          <Image src="/icons/play.svg" width={80} height={80} alt="play" />
        </div>
      </div>
    </div>
  );
}

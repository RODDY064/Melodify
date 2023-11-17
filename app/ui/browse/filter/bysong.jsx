"use client";
import Image from "next/image";
import { useState } from "react";
import ByAllSkeleton from "./skeleton/byAll-skeleton";

export default function BySong() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <>
          <ByAllSkeleton />
        </>
      ) : (
        <div className="w-full grid gap-4">
          <div className="w-full px-2">
            <h2 className="font-bold ">Songs</h2>
            <div className="mt-5 grid gap-4">
              {[1, 2, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[70px] flex justify-between  bg-cream hover:border border-1 border-rose-500/50 shadow-card cursor-pointer rounded-lg p-1">
                  <div className="w-full flex gap-4">
                    <div className="w-[10%] max-sm:w-[25%] h-full flex-none bg-ice rounded-md relative overflow-hidden">
                      <Image src="/images/album.jpg" fill={true} alt="song" />
                    </div>
                    <div className="w-[60%] h-full overflow-hidden my-2">
                      <h3 className="font-light text-sm text-black/70">
                        Timeless
                      </h3>
                      <h3 className="font-light text-[0.8rem] text-black/40 my-1">
                        Timeless
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center text-sm justify-center text-black/60 mx-2">
                    <h4>2:34</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

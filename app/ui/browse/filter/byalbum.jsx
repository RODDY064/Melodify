"use client";
import Image from "next/image";
import { useState } from "react";
import ByAllSkeleton from "./skeleton/byAll-skeleton";

export default function ByAlbum() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <>
          <ByAllSkeleton />
        </>
      ) : (
        <div className="grid gap-4">
          {[1].map((item, index) => (
            <div
              key={index}
              className="w-full h-[270px] max-sm:h-[170px] flex bg-cream/50 rounded-lg p-[0.5rem] border border-1 border-cream/90">
              <div className="w-[44%] max-sm:w-[50%] flex-none h-[250px] max-sm:h-[150px] bg-cream border border-1 border-glass rounded-lg relative overflow-hidden">
              <Image src="/images/album.jpg" fill={true} alt="album" />
              </div>
              <div className="w-[50%] flex flex-col justify-end px-4">
                <div className="my-4">
                  <h3 className="my-1 font-bold text-black/70">
                    The Biggest Album in the world
                  </h3>
                  <h4 className="text-black/40 text-sm">
                    Release Date : {`October 17,2023`}
                  </h4>
                </div>
                <div className="flex gap-4 max-sm:hidden">
                  {[1, 2].map((item, index) => (
                    <div key={item} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-cream border border-1 border-glass"></div>
                      <h4 className="my-1 text-sm font-light">Emma</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

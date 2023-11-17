"use client";
import Image from "next/image";
import { useState } from "react";
import ByAllSkeleton from "./skeleton/byAll-skeleton";

export default function ByArtist() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading ? (
        <>
        <ByAllSkeleton/>
        </>
      ) : (
        <div className="w-full grid grid-cols-4 max-sm:grid-cols-2 gap-4">
          {[1, 2, 4, 5].map((item, index) => (
            <div
              key={index}
              className="w-full h-[240px] bg-gradient-to-r from-pink-500/30 via-red-500/30 to-blue-400/30  shadow-card rounded-lg border-1 border p-[0.02rem] cursor-pointer"
            >
              <div className="w-full h-full bg-cream rounded-md p-2">
                <div className="w-full h-[65%] flex-none relative overflow-hidden rounded-md">
                  <Image src="/images/album.jpg" fill={true} alt="album" />
                </div>
                <div className="my-2 px-1 text-start">
                  <h2>Timeless</h2>
                  <h3 className="text-sm text-black/70">Artist</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

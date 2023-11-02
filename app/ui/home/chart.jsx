import Image from "next/image";
import PlaylistChart from "./playlist-chart";

export default function Chart() {
  return (
    <div className="w-full px-1 py-2 md:p-2 my-8  overflow-hidden">
      <h3 className="text-lg font-[500]">Global Top Chart</h3>
      <div className="w-full flex items-center justify-center">
        <h1 className="mx-1 hidden md:block">
          <Image src="/icons/arrow.svg" width={24} height={24} alt="arrow" />
        </h1>
        <div className="w-full flex  justify-center overflow-hidden rounded-lg  hover:border border-cream/35">
          <div
            className="w-full flex gap-4 max-sm:gap-2 items-center flex-none p-2 overflow-x-auto"
            id="slider">
            <PlaylistChart/>
          </div>
        </div>
        <h1 className="mx-1 hidden md:block">
          <Image
            src="/icons/arrow.svg"
            width={24}
            height={24}
            alt="arrow"
            className="rotate-180"
          />
        </h1>
      </div>
    </div>
  );
}

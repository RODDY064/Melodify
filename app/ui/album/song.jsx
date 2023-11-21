import Image from "next/image";
import Link from "next/link";
import { msTime } from "@app/utils/time";

export default function Song({ track }) {
 

  return (
    <Link
      href={track.track.external_urls.spotify}
      className="w-full min-h-[65px] flex justify-between gap-4 p-1 bg-cream shadow-card cursor-pointer rounded-lg">
      <div className="w-[40%] flex flex-none  items-center h-full ">
        <div className="w-[20%] max-sm:w-[45%] h-full flex flex-none   rounded-lg">
          <div className="w-full h-[65px]  relative overflow-hidden rounded-lg">
            <Image
              src={track.track.album.images[1].url}
              fill={true}
              alt="song"
            />
            <div className="w-full h-full absolute "></div>
          </div>
        </div>
        <div className="ml-2 mt-4 max-sm:mt-2 text-black/90">
          <h3 className="font-medium text-[13px] max-sm:text-[11px]">{track.track.name}</h3>
        </div>
      </div>
       <div className="w-[40%] text-black/70  text-[12px] flex items-center  ">{track.track.artists[0].name}</div>
      <div className="mx-1 flex gap-2 justify-center items-center">
        <h2 className="mt-2">{`${msTime(track.track.duration_ms)}`}</h2>
        <h3 className="text-xl font-bold text-center max-sm:hidden">...</h3>
      </div>
    </Link>
  );
}

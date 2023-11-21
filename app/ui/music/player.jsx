"use client";



import { useMusic } from "@app/libs/context/musicContext";
import MusicPlayerBtn from "./music-player-btn";
import Image from "next/image";
import { dynamic } from "@app/libs/data";

export default function Player() {
  const { music } = useMusic();
  
  return (
    <>
     {music && (
      <div className="w-[73%] flex max-sm:w-[95%] max-sm:h-[90px] right-2 bg-cream shadow-2xl h-[100px] rounded-lg absolute bottom-2 p-2 z-30">
      <div className="w-[12%] max-sm:w-[20%] h-full bg-ice rounded-lg relative">
        <Image src={music?.images[0].url || '/images/album.jpg'} fill={true} className="object-cover rounded-lg"/>
      </div>
      <div className="w-24 flex justify-end m-4 flex-col max-sm:hidden">
        <h3 className="text-sm font-[600]">{music?.name}</h3>
        <h4 className="text-black/70 text-[0.7rem]">{music?.artist}</h4>
      </div>

        <MusicPlayerBtn audio={music?.preview_url} duration={music?.duration_ms}/>
    </div>
    )
    }
    </>
  );
}

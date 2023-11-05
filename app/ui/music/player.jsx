"use client";

import { useMusic } from "@app/libs/context/musicContext";
import MusicPlayerBtn from "./music-player-btn";

export default function Player() {
  const { music } = useMusic();
  return (
    <div className="w-[73%] flex max-sm:w-[95%] right-2 bg-cream shadow-2xl h-[100px] rounded-lg absolute bottom-2 p-2 z-30">
      <div className="w-[12%] max-sm:w-[20%] h-full bg-ice rounded-lg">hello</div>
        <MusicPlayerBtn/>
    </div>
  );
}

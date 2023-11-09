"use client"

import Image from "next/image";
import { useState } from "react"

export default function MusicPlayerBtn() {
   const [musicTime , setMusicTime] = useState(0)

   function formatTime(value){
    const minutes = Math.floor(value/60)
    const seconds = value % 60;
    return `${minutes}:${seconds < 10 ? '0':''}${seconds}`;
   }

   const handlePlayer = (e)=>{
     setMusicTime(e.target.value)
   }
  

  return (
    <div className="w-[55%] h-full mx-4">
    <div className="w-full  my-1 flex gap-2 justify-center items-baseline">
      <div className="w-12 h-12 rounded-full bg-black cursor-pointer flex items-center justify-center">
        <Image src='/icons/play.svg' width={50} height={50} alt="player"/>
      </div>
    </div>
   <div className="w-full flex gap-1">
    <h3>0:00</h3>
   <input type="range" min={0} max={200} value={musicTime}  onChange={(e)=>handlePlayer(e)} className="w-full bg-black rounded-lg outline-none border-none cursor-pointer"></input>
   <h3>{formatTime(musicTime)}</h3>
   </div>
  </div>
  )
}

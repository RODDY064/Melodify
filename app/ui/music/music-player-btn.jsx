import { msTime } from "@app/utils/time";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MusicPlayerBtn({ duration, audio, name }) {
  const [play, setPlay] = useState(false);

  const handlePlay = (e) => {
    const progress = document.getElementById("player");
    setInterval(() => {
      progress.value = e.target.currentTime;
    }, 500);
  
    progress.max = e.target.duration;
  };

  const handleSong = () => {
    const song = document.getElementById("audio");
    !play ? song.play() : song.pause();
    setPlay(!play);
  };

  const handleChange = () => {
    const song = document.getElementById("audio");
    song.currentTime = document.getElementById("player").value;
  };

  useEffect(() => {
    const song = document.getElementById("audio");
    const progress = document.getElementById("player");
 
    const intervalId = play && setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  
    return () => clearInterval(intervalId);
  }, [play]);

  return (
    <div className="w-[55%] h-full mx-4">
      <div className="w-full my-1 flex gap-2 justify-center items-center">
        <Image src="/icons/backward.svg" width={40} height={40} alt="backward" className="cursor-pointer" />
        <div onClick={handleSong} className="w-12 h-12 rounded-full bg-black cursor-pointer flex items-center justify-center">
          <Image src={play ? "/icons/pause.svg" : "/icons/play.svg"} width={50} height={50} alt={play ? "pause" : "play"} />
        </div>
        <Image src="/icons/backward.svg" width={40} height={40} alt="forward" className="cursor-pointer rotate-180" />
      </div>

      <div className="w-full flex gap-1 items-center ">
        <h3>0:00</h3>
        {audio && <audio onLoadedMetadata={(e) => handlePlay(e)} id="audio"><source src={audio} type="audio/mp3" /></audio>}
        <input
          id="player"
          type="range"
          value="0"
          onChange={handleChange}
          className="w-full h-2 bg-black rounded-lg outline-none border-none cursor-pointer"
        />
        <h3>{msTime(duration)}</h3>
      </div>
    </div>
  );
}

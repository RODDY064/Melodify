import Image from "next/image";
import Link from "next/link";

export default function BestSongsCard({ song }) {
  return (
    <Link href={song.track.external_urls.spotify} className="w-full h-[60px] p-[0.2rem] bg-cream shadow-card rounded-lg flex items-center justify-center cursor-pointer">
      <div className="w-full h-full flex justify-between items-center rounded-md bg-ice px-1 py-[3px] text-black/70">
        <div className="w-full h-full  flex gap-2 items-end">
          <div className="w-12 flex flex-none h-full relative bg-cream rounded-lg">
            <Image
              src={song.track.album.images[0].url}
              fill={true}
              className=" rounded-lg"
              alt="song"
            />
            <div className="w-full h-full absolute"></div>
          </div>
          <div>
            <h3 className="text-[12px] font-medium text-flex-wrap">{song.track.name}</h3>
            <h3 className="text-[10px]">{song.track.artists[0].name}</h3>
          </div>
        </div>
        <h3 className="text-xl font-bold">...</h3>
      </div>
    </Link>
  );
}

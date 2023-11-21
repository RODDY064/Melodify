import { fetchAlbum } from "@app/libs/album-data";
import Cover from "@app/ui/album/cover";
import Intro from "@app/ui/album/intro";
import Song from "@app/ui/album/song";
import Controls from "@app/ui/controls";
import Footer from "@app/ui/footer";


export default async function Album({ params }) {
  const playlist = await fetchAlbum(params.id)
   

  return (
    <div className="w-full p-5 max-sm:px-3 pb-1 overflow-y-auto">
      <Controls />
      <div className="w-full py-4">
        <div className="w-full flex gap-6 items-end max-sm:flex-col max-sm:items-center px-2">
          <Cover  image={playlist.images[0].url}/>
          <Intro  name={playlist.name} desc={playlist.description}  followers={playlist.followers} total={playlist.tracks.total} prev={playlist.tracks.items}/>
        </div>
      </div>
      <div className="w-full my-12 p-4 max-sm:px-0">
        <div className="flex justify-between">
          <h3 className="font-medium">Song</h3>
          <h3 className="font-medium text-black/60 max-sm:ml-4">Artist</h3>
          <h3 className="text-sm font-medium text-black/60 mx-4">Time</h3>
        </div>
        <div className="w-full h-[1px] bg-black/10 my-2"></div>
        <div className="w-full flex flex-col items-start gap-4 my-4">
          {playlist.tracks.items.map((item, index) => (
            <Song key={index} track={item} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

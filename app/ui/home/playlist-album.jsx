import { fetchPlaylist } from "@app/libs/data";

export default function PlaylistAlbum() {
  //const Playlist =  await  fetchPlaylist()

  return (
    <>
      {[1, 3, 5].map((item, index) => (
        <div
          key={index}
          className="w-[50%] max-sm:w-[95%] h-[270px] 2xl:h-[500px]  px-[7px] flex flex-none  justify-end bg-cream rounded-lg  overflow-hidden shadow-card">
          <div className="w-full h-full   flex flex-col justify-end rounded-lg">
            {item}
            <div className="w-full h-[100px] rounded-tr-2xl rounded-tl-2xl rounded-lg bg-ice p-4">
              gg
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

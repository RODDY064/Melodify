import PlaylistToday from "./playlist-today";
import { fetchPlaylist } from "@app/libs/data";



export default async  function Today() {
 // const { playlists } = await fetchPlaylist(8,10)
 const playlists = [1,2,4 ,6 ]

  return (
    <>
    <PlaylistToday card={playlists} />
    </>
  );
}

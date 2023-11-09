import PlaylistToday from "./playlist-today";
import { fetchPlaylist } from "@app/libs/data";



export default async  function Today() {
  const { playlists } = await fetchPlaylist(8,10)
 

  return (
    <>
    <PlaylistToday card={playlists} />
    </>
  );
}

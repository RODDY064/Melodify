import PlaylistToday from "./playlist-today";
import { fetchPlaylist } from "@app/libs/data";



export default async  function Today() {
  const { playlists } = await fetchPlaylist(11,15)
 

  return (
    <>
    <PlaylistToday card={playlists} />
    </>
  );
}

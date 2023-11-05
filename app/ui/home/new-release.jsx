import { fetchPlaylist } from "@app/libs/data";
import PlaylistAlbum from "./playlist-album";


export default async function NewRelease() {
   const { playlists } = await fetchPlaylist(0,7)

 // const playlists = [  {id:0,item: 'hello'},{id:1,item:'Hi'},{id:2,item:'Love'}]
 
  return (
    <>
      <PlaylistAlbum data={playlists} />
    </>
  );
}

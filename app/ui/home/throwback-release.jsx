import { fetchNewReleased } from "@app/libs/data";
import PlaylistThrowback from "./playlist-throwback";



export default async  function ThrowbackRelease() {
   const { albums } = await fetchNewReleased(0,20)


  return (
    <>
     <PlaylistThrowback  card={albums} />
    </>
  );
}

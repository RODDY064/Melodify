import { fetchNewReleased } from "@app/libs/data";
import PlaylistThrowback from "./playlist-throwback";


const card = [1, 2, 4, 5, 7];
export default async  function ThrowbackRelease() {
   const { albums } = await fetchNewReleased(0,15)


  return (
    <>
     <PlaylistThrowback  card={albums} />
    </>
  );
}


import { fetchArtist } from "@app/libs/data";
import PlaylistMoreLike from "./playlist-more-like";


export default async function MoreLike() {

  const { artists } = await fetchArtist()
  return (
    <>
    <PlaylistMoreLike cards={artists} />
    </>
  );
}

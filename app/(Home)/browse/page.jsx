import { fetchAlbums } from "@app/libs/data";
import Controls from "@app/ui/controls";

export default function Browse() {
  //const data = fetchAlbums()

  return (
    <div className="w-full min-h-screen px-5 py-1">
      <Controls />
      <h1 className="font-[600] text-3xl mt-10">Browse</h1>
      <div className="w-full bg-black/50 h-[1px] my-2 rounded-lg"></div>
    </div>
  );
}

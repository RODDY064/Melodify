import { fetchAlbums } from "@app/libs/data";
import Categories from "@app/ui/browse/categories";
import Controls from "@app/ui/controls";
import Footer from "@app/ui/footer";

export default function Browse() {
  //const data = fetchAlbums()

  return (
    <div className="w-full min-h-screen px-5 py-1 overflow-y-auto overflow-x-hidden">
      <Controls />
      <h1 className="font-[600] text-3xl mt-10">Browse</h1>
      <div className="w-full bg-black/50 h-[1px] my-2 rounded-lg"></div>
      <Categories/>
      <Footer/>
    </div>
  );
}

import { fetchBrowse } from "@app/libs/browse-api";
import { fetchAlbums } from "@app/libs/data";
import Categories from "@app/ui/browse/categories";
import Controls from "@app/ui/controls";
import Footer from "@app/ui/footer";

export default async function Browse() {
  const { categories } = await fetchBrowse(0, 21);

  return (
    <div className="w-full min-h-screen px-5 py-1 overflow-y-auto overflow-x-hidden">
      <Controls />
      <h1 className="font-[600] text-3xl mt-10">Browse</h1>
      <div className="w-full bg-black/50 h-[1px] my-2 rounded-lg"></div>
      <div className="w-full p-5 grid grid-cols-3 grid-rows-4 gap-4 max-sm:grid-cols-2 max-sm:px-1">
        {categories.items.map((item, index) => (
          <Categories key={index} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

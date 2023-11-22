import { fetchBrowse } from "@app/libs/browse-api";
import Search from "@app/ui/browse/search";
import Controls from "@app/ui/controls";
import Footer from "@app/ui/footer";

export  default async function Browse() {
  const { categories } = await fetchBrowse(0, 21);

  return (
    <div className="w-full min-h-screen px-5 max-sm:px-2 py-1 overflow-y-auto overflow-x-hidden">
      <Controls />
      <Search  categories={categories}/>
      <Footer />
    </div>
  );
}

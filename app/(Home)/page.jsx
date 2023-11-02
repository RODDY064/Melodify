import Controls from "@app/ui/controls";
import Footer from "@app/ui/footer";
import BestSongs from "@app/ui/home/best-songs";
import Chart from "@app/ui/home/chart";
import MoreLike from "@app/ui/home/more-like";
import NewRelease from "@app/ui/home/new-release";
import ThrowbackRelease from "@app/ui/home/throwback-release";
import Today from "@app/ui/home/today-release";
import { Suspense } from "react";
export default function Home() {
  return (
    <div className="w-full min-h-screen px-2 lg:px-10  py-1 overflow-x-hidden">
      <Controls />
      <h1 className="font-[600] text-3xl mt-10">Enjoy</h1>
      <div className="w-full bg-black/50 h-[1px] my-2 rounded-lg"></div>
      {
       // <Suspense fallback={<h1>loading..</h1>}>
          <NewRelease />
        //</Suspense>
      }
      <Today />
      <ThrowbackRelease />
      <BestSongs/>
      <MoreLike/>
      <Chart/>
      <Footer/>
    </div>
  );
}

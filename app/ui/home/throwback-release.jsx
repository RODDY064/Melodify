import PlaylistThrowback from "./playlist-throwback";

export default function ThrowbackRelease() {
  return (
    <>
      <div className="w-full p-2 my-8 overflow-hidden">
        <h3 className="text-lg font-[500]">Throwback</h3>
        <div className="w-full flex items-center justify-center">
          <h1 className="mx-1 max-sm:hidden">Hello</h1>
          <div className="w-full flex  justify-center overflow-hidden rounded-lg  hover:border border-cream/35">
            <div
              className="w-full flex gap-4 items-center flex-none p-2 overflow-x-auto"
              id="slider" >
               <PlaylistThrowback/>
            </div>
          </div>
          <h3 className="mx-1 max-sm:hidden">H1</h3>
        </div>
      </div>
    </>
  );
}

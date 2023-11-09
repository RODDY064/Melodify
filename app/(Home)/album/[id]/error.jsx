"use client";

import Footer from "@app/ui/footer";

export default function isError() {
  return (
    <>
      <div className="p-5 w-full overflow-y-auto">
        <div className="w-full h-[300px] flex items-center justify-center py-5">
          <div className="w-full h-[290px] rounded-lg shadow-card bg-cream flex justify-center items-center">
             <h1 className="font-medium text-xl text-black/80">Something went wrong !</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

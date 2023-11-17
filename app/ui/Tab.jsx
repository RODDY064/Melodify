"use client";

import Image from "next/image";
import { signIn, useSession,signOut } from "next-auth/react";
import { useState } from "react";

export default function Tab() {
  const { data: session } = useSession();
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="absolute z-30 right-5 flex flex-col items-end">
      <div className="min-h-[3.2rem]  flex items-center justify-center gap-4 rounded-lg bg-cream shadow-2xl  px-2 py-1  max-sm:hidden">
        <div className="w-[3.1rem] h-10 bg-glass/70 rounded-lg flex items-center justify-center shadow-sm cursor-pointer">
          <Image src="/icons/tab.svg" width={25} height={24} alt="tab" />
        </div>
        {session?.user ? (
          <div className="w-12 h-12 bg-glass/70  shadow-sm rounded-full flex justify-center items-center cursor-pointer"
          onClick={()=>setIsHidden(!isHidden)}>
            <Image src="/icons/user.svg" width={24} height={24} alt="user" />
          </div>
        ) : (
          <div
            className="w-[5rem] h-10 flex items-center justify-center bg-glass/70 rounded-lg shadow-sm cursor-pointer"
            onClick={signIn}>
            <h3 className="text-lg font-[400]">Sign In</h3>
          </div>
        )}
      </div>
      {isHidden &&
      (
        <div 
        onClick={signOut}
        className="w-28 h-10 p-2 flex  bg-cream shadow-2xl items-center justify-center rounded-lg  mt-2 cursor-pointer">
          <h1>Sign Out</h1>
        </div>
      )}
    </div>
  );
}

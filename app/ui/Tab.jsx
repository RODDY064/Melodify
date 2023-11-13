"use client";

import Image from "next/image";
import { signIn ,useSession } from "next-auth/react";

export default function Tab() {
  const {data: session} = useSession()

  return (
    <div className="absolute z-30 min-h-[3.2rem]  flex items-center justify-center gap-4 rounded-lg bg-cream shadow-2xl  px-2 py-1 right-3 max-sm:hidden">
      <div className="w-[3.1rem] h-10 bg-glass/70 rounded-lg flex items-center justify-center shadow-sm cursor-pointer">
        <Image src='/icons/tab.svg' width={25} height={24} alt="tab" />
      </div>
      {session?.user ? (
        <div className="w-[5rem] h-10 flex items-center justify-center bg-glass/70 rounded-lg shadow-sm cursor-pointer" 
        onClick={signIn}>
          <h3 className="text-lg font-[430]">Sign In</h3>
        </div>
      ) : (
        <div className="w-12 h-12 bg-glass/70  shadow-sm rounded-full flex justify-center items-center cursor-pointer">
           <Image src="/icons/user.svg" width={24} height={24} alt="user" />
        </div>
      )}
    </div>
  );
}

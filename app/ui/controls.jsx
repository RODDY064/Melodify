"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Controls() {
  const router = useRouter()
  return (
    <div className="mb-2 flex gap-4">
        <div className="w-[2.8rem] h-[2.8rem]  bg-cream rounded-full shadow-2xl flex items-center justify-center cursor-pointer" onClick={()=>router.back()}>
          <Image src='/icons/left.svg' width={34} height={34} alt="arrow"/>
        </div>
        <div className="w-[2.8rem] h-[2.8rem]  bg-cream rounded-full shadow-2xl flex items-center justify-center cursor-pointer" onClick={()=>router.forward()}>
        <Image src='/icons/right.svg' width={34} height={34} alt="arrow"/>
        </div>
    </div>
  )
}

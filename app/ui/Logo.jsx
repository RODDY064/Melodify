"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Logo() {
  const pathName = usePathname();

  return (
    <div className="w-full  h-[8rem] max-sm:h-auto pb-4 flex justify-between items-start my-2 overflow-hidden px-2">
      <Link href="/" className="w-full">
        <motion.div
          className={clsx(
            "w-full px-10 py-3 my-2 rounded-lg cursor-pointer hover:bg-glass/70 flex gap-2 justify-center items-center max-sm:justify-start bg-glass/50",
            {
              "bg-gradient-to-r from-pink-500/30 via-red-500/30 to-blue-400/30 ": pathName === "/",
            }
          )}>
          <span>
            <Image
              src="/icons/home.svg"
              width={24}
              height={22}
              priority
              alt="home"
            />
          </span>
          <div className="font-[600] text-xl">Home</div>
        </motion.div>
      </Link>
      <Image
        src="/images/logo.svg"
        width={85}
        height={50}
        alt="logo"
        className="max-sm:hidden"
      />
    </div>
  );
}

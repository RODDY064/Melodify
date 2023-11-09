"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { nav_animate } from "./animation/motion";
import Search from "./Search";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { id: 1, name: "Browse", href: "/browse",icons:'/icons/browse.svg'},
  { id: 2, name: "Playlist", href: "/playlist", icons:'/icons/playlist.svg'},
];

export default function Nav() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [onSmallDevice, setOnSmallDevice] = useState(false);
  const [isLog, setIsLog] = useState(true);
  const pathName = usePathname()

  useEffect(() => {
    function isSmallDevice() {
      return window.innerWidth <= 768;
    }
    if (isSmallDevice()) {
      setOnSmallDevice(true);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={onSmallDevice && nav_animate}
          initial={onSmallDevice && isAnimating ? { y: -1000 } : {}}
          animate={`${isAnimating ? "open" : "closed"}`}
          exit="closed"
          className={`w-[25%]  max-sm:absolute  z-30
          ${!onSmallDevice ? "max-sm:hidden" : ""}  
          max-sm:h-[500px] max-sm:w-full flex flex-col h-[100%] bg-cream/90 flex-none   shadow-2xl rounded-lg`}
        >
          <div>
            <div className="w-full p-2 justify-end hidden max-sm:flex">
              <div
                onClick={() => setIsAnimating(!isAnimating)}
                className="w-14 h-14  flex items-center justify-center bg-cream shadow-2xl rounded-full"
              >
                <Image src="/icons/x.svg" width={24} height={24} alt="x" />
              </div>
            </div>
            <Logo />
          </div>
          <div className="p-2">
            <Search />
            <div className="my-6 flex gap-2 flex-col">
              {Links.map((item) => (
               <Link  href={item.href} key={item.id}>
                 <div
                  className={clsx(
                    "w-[75%] flex items-center gap-2 bg-glass/50 cursor-pointer hover:bg-glass/70  max-sm:w-full h-[3.2rem] rounded-lg px-1",
                    {
                      'bg-gradient-to-r from-pink-500/30 via-red-500/30 to-blue-400/30 ': pathName === item.href
                    }
                  )}>
                  <span>
                    <Image
                      src={item.icons}
                      width={34}
                      height={34}
                      priority
                      alt={item.name}
                      className="w-auto"
                    />
                  </span>
                  <h1 className="font-[550] text-xl">{item.name}</h1>
                </div>
               </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* mobile navigation*/}
      <div className="w-full justify-between py-4 px-1 hidden max-sm:flex">
        <div
          onClick={() => setIsAnimating(!isAnimating)}
          className="w-14 h-14  flex items-center justify-center bg-cream shadow-2xl rounded-full cursor-pointer overflow-hidden"
        >
          <Image src="/icons/menu.svg" width={34} height={34} alt="menu" />
        </div>
        <div>
          <Image src="/images/mobile.svg" width={70} height={50} alt="logo" />
        </div>
        <div>
          {isLog ? (
            <div className="w-14 h-14  flex items-center justify-center bg-cream shadow-2xl rounded-full">
              <Image src="/icons/user.svg" width={24} height={24} alt="user" />
            </div>
          ) : (
            <div className="w-24 h-12 flex items-center justify-center bg-cream shadow-2xl rounded-lg cursor-pointer">
              <h3 className="text-xl font-[450]">Sign in</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

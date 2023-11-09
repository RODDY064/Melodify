"use client";

import Image from "next/image";
import { animate, motion, useAnimation } from "framer-motion";
import { sign_animate } from "./animation/animate";
import { useState } from "react";
import SigninWelcome from "@app/ui/signin/signin-welcome";
import SignupWelcome from "@app/ui/signin/signup-welcome";
import LoginForm from "@app/ui/signin/login-form";
import CreateForm from "@app/ui/signin/create-form";

export default function page() {
  const [isAnimating, setIsAnimating] = useState({
    hide: false,
    animate: false,
  });
  const controls = useAnimation();
  const controls_2 = useAnimation();

  const handleAnimate = () => {
    controls.start(isAnimating.animate ? "closed" : "open");
    controls_2.start(isAnimating.animate ? "closed" : "visible");

    setTimeout(() => setIsAnimating((prev) => ({ ...prev, hide: !isAnimating.hide })), 500);
  };

  return (
    <div className="w-full p-5 min-screen">
      <div className="w-full flex justify-between">
        <Image src="/images/mobile.svg" width={70} height={70} alt="logo" />
        <div className="w-24 h-10 bg-cream shadow-card rounded-lg flex justify-center items-center cursor-pointer">
          Sign Up
        </div>
      </div>
      <div className="w-full flex flex-col  items-center justify-center mt-10">
        <div className="w-[70%] max-sm:w-[97%] h-[400px] flex max-sm:h-[500px] bg-cream shadow-card rounded-lg p-1">
          {!isAnimating.hide ? (
            <motion.div
              variants={sign_animate}
              animate={controls_2}
              initial={{ x: 0, opacity: 1 }}
              className="w-[50%] h-full max-sm:w-full p-2 bg-ice rounded-md flex items-center flex-col"
            >
              <SigninWelcome />
            </motion.div>
          ) : (
            <CreateForm 
            setIsAnimating={setIsAnimating}
            handleAnimate={handleAnimate}
            isAnimating={isAnimating}
            />
          )}
          {!isAnimating.hide ? (
            <motion.div
              variants={sign_animate}
              animate={controls}
              initial={{ x: 0, opacity: 1 }}
              className="w-[50%] h-full max-sm:w-full max-sm:hidden p-2">
              <LoginForm
                setIsAnimating={setIsAnimating}
                handleAnimate={handleAnimate}
                isAnimating={isAnimating}
              />
            </motion.div>
          ) : (
            <motion.div
             className="w-[50%] h-full max-sm:w-full p-2 bg-ice rounded-md flex items-center flex-col">
              <SignupWelcome />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

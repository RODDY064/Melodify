"use client";

import Image from "next/image";
import {  motion, useAnimation } from "framer-motion";
import {  sign_animate } from "./animation/animate";
import { useEffect, useState } from "react";
import SigninWelcome from "@app/ui/signin/signin-welcome";
import SignupWelcome from "@app/ui/signin/signup-welcome";
import LoginForm from "@app/ui/signin/login-form";
import CreateForm from "@app/ui/signin/create-form";


export default function page() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
      setIsSmallDevice(window.innerWidth < 746); 
    },[])
  const [isAnimating, setIsAnimating] = useState({
    hide: false,
    animate: false,
  });
  const controls = useAnimation();
  const controls_2 = useAnimation();

  const handleAnimate = () => {
    controls.start(isAnimating.animate ? "closed" : "open");
    controls_2.start(isAnimating.animate ? "closed" : "visible");
 
    setTimeout(
      () => setIsAnimating((prev) => ({ ...prev, hide: !isAnimating.hide })),
      500
    );
    
  };

  return (
    <div className="w-full p-5 min-screen">
      <div className="w-full flex justify-between">
        <Image src="/images/mobile.svg" width={70} height={70} alt="logo" />
        <div className="w-24 h-10 bg-cream shadow-card rounded-lg flex justify-center items-center cursor-pointer" 
        onClick={()=>{handleAnimate(),setIsAnimating((prev)=>({...prev,animate:!isAnimating.animate}))}}>
          {!isAnimating.hide ?
          (<>Sign Up</>):
          (<>Sign In</>)

          }
        </div>
      </div>
      <div className="w-full flex flex-col  items-center justify-center mt-10">
        <div className="w-[70%] max-sm:w-[97%] h-[400px] flex max-sm:h-[500px] bg-cream shadow-card rounded-lg p-1 overflow-hidden">
          <motion.div
            variants={sign_animate}
            animate={controls_2}
            initial={{ x: 0 }}
            className="w-[50%] h-full max-sm:w-full p-2 max-sm:hidden bg-ice  rounded-md flex items-center flex-col">
            {!isAnimating.hide ? (
              <div className="w-full flex flex-col items-center">
                <SigninWelcome />
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <SignupWelcome />
              </div>
            )}
          </motion.div>
          <motion.div
            variants={sign_animate}
            animate={isSmallDevice ? '': controls}
            initial={{ x: 0, opacity: 1 }}
            className="w-[50%] h-full max-sm:w-full  p-2 bg-cream">
            {!isAnimating.hide ? (
              <div className="w-full h-full">
                <div className="hidden max-sm:block p-4">
                  <h1 className="text-center text-xl font-bold">Welcome</h1>
                  <h2 className="text-lg font-medium">Login</h2>
                  <h4 className="text-sm text-black/40">Please enter your details to login</h4>
                </div>
                <LoginForm
                  setIsAnimating={setIsAnimating}
                  handleAnimate={handleAnimate}
                  isAnimating={isAnimating}
                />
              </div>
            ) : (
              <>
              <div className="hidden max-sm:block p-4">
                  <h1 className="text-center text-xl font-bold">Create Account</h1>
                  <h2 className="text-lg font-medium">Sign Up</h2>
                  <h4 className="text-sm text-black/40">Please  your details to sign up</h4>
                </div>
                <CreateForm
                setIsAnimating={setIsAnimating}
                handleAnimate={handleAnimate}
                isAnimating={isAnimating}
              />
              </>
             
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

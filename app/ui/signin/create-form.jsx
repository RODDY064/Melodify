"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CreateForm({
  handleAnimate,
  setIsAnimating,
  isAnimating,
}) {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const register = async (e) => {
    e.preventDefault()
    try {
      if (!user.email || !user.password || !user.confirmPassword) {
        throw new Error("All field are required");
      }

      if (user.password !== user.confirmPassword) {
        return  toast.error("Password do not match");  
      }

      const account = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (account.status === 200) {
        const result = await account.json();
        toast.success("Register successfully");
        router.push("/");
      } else {
        const errorData = await account.json();
        toast.error(errorData.error);
      }
    } catch (error) {
      console.log(error);
      return toast.error("Fail to register");
    }
  };

  return (
    <div className="w-full h-full ">
      <form className="flex flex-col px-2">
        <label className="p-1">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e)=>setUser((value)=>({...value,email:e.target.value}))}
          className="w-full h-12 rounded-lg p-2 bg-ice focus:outline-none focus:border border-rose-400/30 "
        />
        <label className="p-1">Password</label>
        <input
          type="password"
          value={user.password}
          onChange={(e)=>setUser((value)=>({...value,password:e.target.value}))}
          className="w-full h-12 rounded-lg p-2 bg-ice focus:outline-none focus:border border-rose-400/30 "
        />
        <label className="p-1">Confirm Password</label>
        <input
          type="password"
          value={user.confirmPassword}
          onChange={(e)=>setUser((value)=>({...value,confirmPassword:e.target.value}))}
          className="w-full h-12 rounded-lg p-2 bg-ice focus:outline-none focus:border border-rose-400/30 "
        />

        <button type="submit"
         onClick={(e)=>register(e)}
         className="w-full h-12 bg-gradient-to-r from-pink-500/30 via-red-500/30 to-blue-400/30  rounded-lg  font-medium my-4">
          Submit
        </button>
        <h3
          className="text-center text-blue-500 cursor-pointer hover:underline"
          onClick={() => {
            handleAnimate("animate"),
              setIsAnimating((prev) => ({
                ...prev,
                animate: !isAnimating.animate,
              }));
          }}
        >
          Already have account? Sign in
        </h3>
      </form>
    </div>
  );
}

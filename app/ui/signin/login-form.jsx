"use client"

import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm({
  handleAnimate,
  setIsAnimating,
  isAnimating,
}) {

  const router = useRouter()
  const [user , setUser] = useState({
    email:'',
    password:''
  })

  const login = async(e)=>{
    e.preventDefault();

    if(!user.email || !user.password ){
      return
    }

    const res = await signIn('credentials',{
      username:user.email,
      password:user.password,
      redirect:false
    },)

    if(res.status === 200){
      toast.success('Logged in successfully')
      router.push('/')
    }

    if(res.status === 401){
      toast.error('Invalid Email or Password, Please try again')
    }

          
    
  }

  return (
    <>
      <form className="flex flex-col px-2" >
        <label className="p-1">Username</label>
        <input
          type="text"
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
        <div className="flex justify-between my-4 mx-1">
          <div className="flex gap-2">
            <h2>Remember Me</h2>
            <input type="checkbox" />
          </div>
          <h2 className="cursor-pointer text-blue-500 hover:underline">
            forgotten password{" "}
          </h2>
        </div>
        <button type="submit" onClick={(e)=>login(e)} className="w-full h-12 bg-gradient-to-r from-pink-500/30 via-red-500/30 to-blue-400/30  rounded-lg  font-medium my-4">
          Submit
        </button>
        <h3
          className="text-center text-blue-500 cursor-pointer hover:underline"
          onClick={() => {
            handleAnimate('animate'),
              setIsAnimating((prev) => ({
                ...prev,
                animate: !isAnimating.animate,
              }));
          }}
        >
          Don't have account? Sign up
        </h3>
      </form>
    </>
  );
}

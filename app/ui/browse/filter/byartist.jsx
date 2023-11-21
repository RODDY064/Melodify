"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ByAllSkeleton from "./skeleton/byAll-skeleton";
import Link from 'next/link'
export default function ByArtist( { query}) {
  const [isLoading, setIsLoading] = useState(true);

  const [data , setData ] = useState([])

const fetchData = async()=>{
  const res = await fetch(`/api/search?query=${query}`,{
    headers:{
      'Type':'artist',
      'Limit':10
    }
  })
  if(res.status === 200){
    const body = await res.json()
    setData(body)
  }
}

useEffect(()=>{
  fetchData()
},[query])

useEffect(()=>{
  if(data.artists){
    setIsLoading(false)
  }else{
    setIsLoading(true)
  }
},[data])




  return (
    <>
      {isLoading ? (
        <>
        <ByAllSkeleton/>
        </>
      ) : (
        <div className="w-full grid grid-cols-4 max-sm:grid-cols-2 gap-4">
          {data.artists?.items.map((item) => (
            <Link
             href={item.external_urls.spotify}
             key={item.id}
              className="w-full h-[240px] bg-gradient-to-r from-pink-500/30 via-red-500/30 to-blue-400/30  shadow-card rounded-lg border-1 border p-[0.02rem] cursor-pointer ">
              <div className="w-full h-full bg-cream rounded-md p-2 hover:border border-1 border-rose-500/50  ">
                <div className="w-full h-[65%] flex-none relative overflow-hidden rounded-md">
                  <Image  src={item.images[0]?.url || '/images/artist.svg' } fill={true} alt="album" />
                </div>
                <div className="my-2 px-1 text-start">
                  <h2>{item.name}</h2>
                  <h3 className="text-sm text-black/70">Artist</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

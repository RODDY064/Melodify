"use client";
import Image from "next/image";
import { useState , useEffect } from "react";
import ByAllSkeleton from "./skeleton/byAll-skeleton";
import Link from 'next/link'
import { msTime } from "@app/utils/time";

export default function BySong( { query }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data , setData ] = useState([])

const fetchData = async()=>{
  const res = await fetch(`/api/search?query=${query}`,{
    headers:{
      'Type':'track',
      'Limit':15
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
  if(data.tracks){
    setIsLoading(false)
  }else{
    setIsLoading(true)
  }
},[data])




  return (
    <>
      {isLoading ? (
        <>
          <ByAllSkeleton />
        </>
      ) : (
        <div className="w-full grid gap-4">
          <div className="w-full px-2">
            <h2 className="font-bold ">Songs</h2>
            <div className="mt-5 grid gap-4">
              {data.tracks?.items.map((item) => (
                <Link
                href={item.external_urls.spotify}
                  key={item.id}
                  className="w-full h-[75px] flex justify-between  bg-cream hover:border border-1 border-rose-500/50 shadow-card cursor-pointer rounded-lg p-1">
                  <div className="w-full flex gap-4">
                    <div className="w-[10%] max-sm:w-[25%] h-[68px] flex-none bg-ice rounded-md relative overflow-hidden">
                      <Image src={item.album.images[0].url} fill={true} alt="song" />
                    </div>
                    <div className="md:w-[60%] h-full overflow-hidden my-2 w-full max-sm:flex flex-col justify-center max-sm:my-0">
                      <h3 className="font-light text-sm text-black/70 ">
                        {item.name}
                      </h3>
                      <h3 className="font-light text-[0.8rem] text-black/40 my-1">
                        {item.artists[0].name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center text-sm justify-center text-black/60 mx-2">
                    <h4>{msTime(`${item.duration_ms}`)}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

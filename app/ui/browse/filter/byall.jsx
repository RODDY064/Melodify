"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import ByAllSkeleton from "./skeleton/byAll-skeleton";
import Link from 'next/link'
import { msTime } from "@app/utils/time";



export default function ByAll({ query }) {
const [isLoading, setIsLoading] = useState(true)
const [data , setData ] = useState([])

const fetchData = async()=>{
  const res = await fetch(`/api/search?query=${query}`,{
    headers:{
      'Type':'all',
      'Limit':4
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
    {isLoading ? 
    (<div className="w-full ">
        <ByAllSkeleton/>
     </div>):
    (<div className="overflow-hidden">
    <div className="w-full flex max-sm:flex-col   justify-between gap-4">
      <div className="w-[48%] max-sm:w-full grid grid-cols-2 grid-rows-2 gap-4   px-2">
        {data.artists?.items.map((item) => (
          <Link 
             href={item.external_urls.spotify}
            key={item.id}
            className="w-[100%] h-[180px] flex-none  rounded-lg bg-cream hover:border border-1 border-rose-500/50  cursor-pointer shadow-card flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-ice rounded-full relative overflow-hidden">
              <Image
                src={item.images[0]?.url || '/images/artist.svg' }
                fill={true}
                alt="artist"
                className="object-contain"
              />
            </div>
            <h3 className="my-2 text-black/70 text-center">{item.name}</h3>
          </Link>
        ))}
      </div>
      <div className="w-[50%] max-sm:w-full px-2">
        <h2 className="font-bold ">Songs</h2>
        <div className="mt-5 grid gap-4">
          {data.tracks?.items.map((item) => (
            <Link 
              href={item.external_urls.spotify}
              key={item.id}
              className="w-full min-h-[70px] flex justify-between items-center bg-cream hover:border border-1 border-rose-500/50 shadow-card cursor-pointer rounded-lg p-1">
              <div className="w-[18%] h-[70px] flex-none bg-ice rounded-md relative overflow-hidden">
                <Image src={item.album?.images[0].url} fill={true} alt="song" />
              </div>
             <div className="w-full h-full flex justify-between mx-2">
             <div className="w-[60%] h-full overflow-hidden my-2">
                <h3 className="font-light text-sm text-black/70">{item.name}</h3>
                <h3 className="font-light text-[0.8rem] text-black/40 my-1">
                {item.artists[0]?.name}
                </h3>
              </div>
              <div className="flex items-center text-sm justify-center text-black/60 mx-2">
                <h4>{msTime(`${item.duration_ms}`)}</h4>
              </div>
             </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full p-2">
      <h2 className="my-4  font-bold">Album</h2>
      <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
        {data.albums?.items.map((item) => (
          <Link
             href={item.external_urls.spotify}
            key={item.id}
            className="w-full h-[245px] bg-cream hover:border border-1 border-rose-500/50 shadow-card cursor-pointer rounded-lg p-2">
            <div className="w-full h-[65%] flex-none relative overflow-hidden rounded-md">
            <Image src={item.images[0].url} fill={true} alt="album" />
            </div>
            <div className="my-2 px-1 text-start">
              <h2 className="h-[30px] overflow-y-hidden text-lg">{item.name}</h2>
              <h3 className="text-sm text-black/70 l">{item.artists[0].name}</h3>

            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>)

    }
    </>

  );
}

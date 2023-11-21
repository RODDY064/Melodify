"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import ByAllSkeleton from "./skeleton/byAll-skeleton";
import Link from 'next/link'


export default function ByAlbum({ query }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data , setData ] = useState([])

const fetchData = async()=>{
  const res = await fetch(`/api/search?query=${query}`,{
    headers:{
      'Type':'album',
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
  if(data.albums){
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
        <div className="grid gap-4">
          {data.albums?.items.map((item, index) => (
            <Link
              href={item.external_urls.spotify}
              key={index}
              className="w-full h-[270px] max-sm:h-[175px] flex bg-cream/50 rounded-lg p-[0.5rem] border border-1 border-cream/90 cursor-pointer hover:border  hover:border-rose-500/50  ">
              <div className="w-[44%] max-sm:w-[50%] flex-none h-[250px] max-sm:h-[150px] bg-cream border border-1 border-glass rounded-lg relative overflow-hidden">
              <Image src={item.images[0].url} fill={true} alt="album" />
              </div>
              <div className="w-[50%] flex flex-col justify-center px-4 max-sm:px-0 max-sm:pl-4">
                <div className="my-4 max-sm:my-0">
                  <h3 className="my-1 max-sm:text-sm font-bold text-black/70">
                    {item.name}
                  </h3>
                  <h4 className="text-black/40 text-sm">
                    Release Date : {`October 17,2023`}
                  </h4>
                </div>
                <div className="flex gap-2 flex-col">
                <h4 className="text-sm font-[500] text-black/70">By</h4>
                <h4 className="text-lg font-[600] max-sm:text-sm max-sm:font-medium">{item.artists[0].name}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

'use client'

import { useMusic } from "@app/libs/context/musicContext";

export default function Preview( { prev }) {
   
    const { setMusic } = useMusic()


    function getFirstNonNullPreviewUrl(items){
        for (const item of items) {
          const { track } = item;
          if (track.preview_url !== null) {
            console.log('It contain')
            return {
                preview_url: track.preview_url,
                images: track.album.images,
                duration_ms: track.duration_ms,
                name: track.name,
                artist: track.artists[0].name
            }
          
          }
        }
        console.log('It does not contain')
        return null;
      }



  return (
    <button
     onClick={()=>setMusic(getFirstNonNullPreviewUrl(prev))}
     className="w-24 h-10 bg-cream rounded-lg shadow-card cursor-pointer p-2 mt-4">
    Preview
  </button>
  )
}

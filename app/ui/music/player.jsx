'use client'

import { useMusic } from "@app/libs/context/musicContext"

export default function Player() {
    const {music} = useMusic()
  return (
    <div className='w-[73%] max-sm:w-[95%] right-2 bg-cream shadow-2xl h-[90px] rounded-lg absolute bottom-2'>
     {music[0]}
    </div>
  )
}

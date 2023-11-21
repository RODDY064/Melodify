'use client'

import { createContext, useContext, useState } from "react"

const musicContext = createContext(null)

export default function MusicContextProvider( { children }) {
  const [music , setMusic] = useState(null)

  return (
    <musicContext.Provider value={{ music , setMusic}}>
      {children}
    </musicContext.Provider>
  )
}

export function useMusic(){
    const context = useContext(musicContext)
    if(!context){
        throw new Error('music should be use in music context provider')
    }else {
        return context
    }
}
import { fetchTracks } from "@app/libs/data"
import BestSongsCard from "./best-songs-card"


export default async function BestSongs() {

  const { items } = await fetchTracks()
  return (
    <div className='w-full p-2 my-8 '>
        <h3 className="text-lg font-[500]">Best Songs</h3>
        <div className='w-full max-sm:px-1 py-2 pl-14 pr-4 h-auto md:grid-flow-row max-sm:grid-cols-1 pb-5 grid grid-cols-2  grid-rows-4 gap-2 '>
            {  items.map((item,index)=>(
              <BestSongsCard key={index}  song={item}/>
            ))
            }
        </div>
    </div>
  )
}



export default function BestSongs() {
  return (
    <div className='w-full p-2 my-8 '>
        <h3 className="text-lg font-[500]">Best Songs</h3>
        <div className='w-full max-sm:px-1 py-2 pl-14 pr-4 h-auto pb-5 grid grid-cols-2  grid-rows-4 gap-2 '>
            {[1,2,3,4,5,6,7,8].map((item,index)=>(
                <div key={index} className="w-full h-[50px] p-[0.2rem] bg-cream shadow-card rounded-lg flex items-center justify-center">
                    <div className="w-full h-full flex justify-between items-center rounded-md bg-ice p-2 text-black/70">
                        <h3>...</h3>
                        <h3> Music</h3>
                    </div>
                </div>
            ))

            }
        </div>

    </div>
  )
}

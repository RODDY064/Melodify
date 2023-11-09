"use client"

import { motion } from 'framer-motion';

export default function CardSkeleton() {
    const card = [1, 2, 3, 4];
    return (
      <>
        <div className="w-full  overflow-hidden flex gap-4 my-4">
        {card.map((item, index) => (
            <div key={index}  className="w-[30%] flex-none flex flex-col gap-4 justify-between h-[290px] bg-cream shadow-card rounded-lg p-2">
              <motion.div 
              animate={{opacity : [1,0.5,0.2,0.5,1]}}
              initial={{opacity: 1}}
              transition={{duration:2,repeat:Infinity ,repeatType:'loop'}}
              className="w-full h-[60%] flex-none bg-ice rounded-lg">
              </motion.div>
              <motion.div 
               animate={{opacity : [1,0.5,0.2,0.5,1]}}
               initial={{opacity: 1}}
               transition={{duration:2,delay:1,repeat:Infinity ,repeatType:'loop'}}
              className="w-full h-[30%] flex-none bg-ice rounded-lg">
  
              </motion.div>
            </div>
          ))}
        </div>
      </>
      )

}

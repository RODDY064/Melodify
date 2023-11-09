"use client"

import { motion } from 'framer-motion';

export default function PlaylistAlbumSkeleton() {
  const card = [1, 2, 3, 4];
  
  return (
    <div className="w-full overflow-hidden flex gap-6 my-4">
      {card.map((item, index) => (
        <div key={index} className="w-[50%] flex-none justify-between h-[270px] bg-cream shadow-card rounded-lg p-2">
          <motion.div
            animate={{
              opacity: [1, 0.5, 0.2, 0.5, 1], // Opacity wave
            }}
            initial={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
            className="w-full h-full flex-none bg-ice rounded-lg"
          >
          </motion.div>
        </div>
      ))}
    </div>
  );
}

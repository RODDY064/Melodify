'use client'
import { dotSpinner } from 'ldrs'

dotSpinner.register()



export default function ByAllSkeleton() {
  return (
    <div className="w-full h-[400px] bg-cream shadow-card rounded-lg  flex justify-center items-center">
      <l-dot-spinner size="40" speed="0.9" color="black"></l-dot-spinner>
    </div>
  );
}

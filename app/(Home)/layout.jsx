import Tab from '@app/ui/Tab'
import Nav from '@app/ui/Nav'
import Player from '@app/ui/music/player'


export default function Homelayout({ children }) {
  return (
   <div className='w-full flex h-screen overflow-hidden max-sm:flex-col p-1'>
      <Nav />
       <Tab />
       <Player/>
      {children}
   </div>
  )
}

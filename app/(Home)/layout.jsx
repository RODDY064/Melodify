import Tab from '@app/ui/Tab'
import Nav from '@app/ui/nav'


export default function Homelayout({ children }) {
  return (
   <div className='w-full flex h-screen overflow-hidden max-sm:flex-col p-1'>
      <Nav />
       <Tab />
      {children}
   </div>
  )
}

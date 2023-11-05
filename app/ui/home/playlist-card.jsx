import Click from "./Click";
import Image from "next/image";
export default function PlaylistCard({ data }) {

   const backgroundImageStyle = {
    backgroundImage: `${data.images[0]?.url}` || `${data.images[1]?.url}` || '/images/album.jpg'
  };
  
  
  return (
    <>
     <div className="w-[50%] max-sm:w-[95%] h-[355px] 2xl:h-[500px] cursor-pointer   flex flex-none  bg-cream rounded-lg  overflow-hidden shadow-card " id="card_box">
        <div className="w-full h-full relative  flex items-center justify-center">
          <div className="w-[96%] h-[95%]  absolute rounded-lg z-10 overflow-hidden">
            <Image src={backgroundImageStyle.backgroundImage} fill={true} alt="cover h-[120%] object-contain" />
          </div>
          <div className="w-full h-full z-20 flex flex-col px-[7px] pb-[5px] justify-end">
            <Click word={data.description}/>
          </div>
        </div>
      </div>
    </>
  );
}

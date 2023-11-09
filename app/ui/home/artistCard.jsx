import Image from "next/image";
import Link from "next/link";

export default function ArtistCard({ data }) {
  const backgroundImageStyle = {
    backgroundImage: `${data.images[0]?.url}` || `${data.images[1]?.url}` || '/images/album.jpg'
  };
  
  return (
    <>
        <Link href={data.href}
          className="md:w-[32%] cursor-pointer  w-[47%] flex flex-col justify-between items-center flex-none p-1 h-[14rem] md:h-[18rem] xl:h-[20rem]2xl:h-[25rem] bg-cream  hover:bg-cream/50 shadow-card rounded-lg">
          <div className="w-full h-[70%] rounded-lg relative ">
           <div className="w-full h-full absolute overflow-hidden">
           <Image src={backgroundImageStyle.backgroundImage} fill={true} alt="cover" className="rounded-md"/>
           <div className="w-full h-full absolute"></div>
           </div>
          </div>
          <div className="w-full h-[80px] flex justify-end bg-ice rounded-tl-2xl rounded-tr-2xl rounded-lg">
           <div className="w-full px-4">
            <h3 className="w-full ">{data.name}</h3>
            <h4 className="text-sm text-black/70">Artist</h4>
           </div>
            <div className="px-4 py-1 overflow-hidden">
              <div className="w-8 h-8 bg-cream rounded-full mb-2 flex items-center justify-center cursor-pointer overflow-hidden hover:bg-black">
                <Image
                  src="/icons/play.svg"
                  alt="play"
                  width={26}
                  height={26}
                />
              </div>
              <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
                <Image src="/icons/dot.svg" width={27} height={15} alt="dot" />
              </div>
            </div>
          </div>
        </Link>
    </>
  );
}

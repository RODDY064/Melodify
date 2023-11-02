import Image from "next/image";

export default function Card({ card }) {
  return (
    <>
      {card.map((item, index) => (
        <div
          key={index}
          className="md:w-[32%]  w-[47%] flex flex-col justify-end items-center flex-none p-1 h-[14rem] md:h-[18rem] xl:h-[20rem]2xl:h-[25rem] bg-cream  hover:bg-cream/50 shadow-card rounded-lg">
          <div>hello</div>
          <div className="w-full h-[100px] flex justify-end bg-ice rounded-tl-2xl rounded-tr-2xl rounded-lg">
            <div className="px-4 py-1 overflow-hidden">
              <div className="w-10 h-10 bg-cream rounded-full mb-2 flex items-center justify-center cursor-pointer overflow-hidden hover:bg-black">
                <Image
                  src="/icons/play.svg"
                  alt="play"
                  width={26}
                  height={26}
                />
              </div>
              <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
                <Image src="/icons/dot.svg" width={27} height={15} alt="dot" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
import Image from "next/image";
export default function Cover({ image }) {
  return (
    <div className="w-[40%] max-sm:w-[90%] h-[270px] flex flex-none bg-cream shadow-card rounded-lg cursor-pointer relative">
      <Image
        src={image}
        fill={true}
        className="rounded-lg"
      />
      <div className="w-full h-full absolute"></div>
    </div>
  );
}

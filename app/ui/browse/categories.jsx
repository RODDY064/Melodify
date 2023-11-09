import Image from "next/image";
import Link from "next/link";

export default function Categories({ data}) {
  return (
    <Link
     href={data.href}
     className="w-full h-[170px] bg-cream shadow-card flex items-center justify-center flex-none rounded-lg p-1">
      <div className="w-full h-full relative ">
        <Image src={data.icons[0].url} fill={true} alt="browse" className="rounded-lg"/>
        <div className="w-full h-full absolute flex items-end p-5 text-white">
            <h2>{data.name}</h2>
        </div>
      </div>
     </Link>
  );
}

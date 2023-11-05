import Link from "next/link";
import Social from "./footer/social";

const list = [
  {
    name: "Company",
    links: [
      { item: "About", href: "/" },
      { item: "Job", href: "/" },
      { item: "Team", href: "/" },
    ],
  },
  {
    name: "Communities",
    links: [
      { item: "For Artist", href: "/" },
      { item: "Developers", href: "" },
      { item: "Vendors", href: "/" },
      { item: "Discord", href: "/" },
    ],
  },
  {
    name: "Extra",
    links: [
      { item: "Support", href: "/" },
      { item: "Free Download", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="w-full h-[600px] max-sm:h-[700px] p-2 pt-12 mt-10">
      <div className="w-full flex justify-between max-sm:block">
        <div className="w-full grid grid-cols-2 grid-rows-1 gap-6">
          {list.map((item, index) => (
            <div key={index}>
              <h1 className="text-lg font-[500]">{item.name}</h1>
              <div className="my-4 flex flex-col gap-1 ">
                {item.links.map((value, index) => (
                  <Link
                    href={value.href}
                    key={index}
                    className="cursor-pointer  hover:underline underline-offset-2">
                    {value.item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <Social />
        </div>
      </div>
      <div className="w-full my-2 text-sm text-black/60">
        <div className="w-full h-[1px] bg-black/30 rounded-lg"></div>
        <div className="w-full flex justify-between items-baseline my-4 flex-wrap max-sm:gap-2">
          <div className="flex gap-4 max-sm:gap-1">
            <h3 className="cursor-pointer hover:text-black">Legal</h3>
            <h3 className="cursor-pointer hover:text-black">Privacy</h3>
            <h3 className="cursor-pointer hover:text-black">
              Terms and Conditions
            </h3>
            <h3 className="cursor-pointer hover:text-black">Cookies</h3>
            <h3 className="cursor-pointer hover:text-black">Accessibility</h3>
          </div>
          <div className="cursor-pointer hover:text-black max-sm:ml-6 ">&copy; 2023 RODDY</div>
        </div>
      </div>
    </div>
  );
}

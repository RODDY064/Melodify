import React from "react";

const social = [
  { name: "facebook", media: "", icon: "/icons/facebook.svg" },
  { name: "instagram", media: "", icon: "/icons/instagram.svg" },
  { name: "github", media: "", icon: "/icons/github.svg" },
];

export default function Social() {
  return (
    <div className="px-4 max-sm:px-0  flex gap-6 max-ms:gap-4">
      {social.map((item, index) => (
        <div
          key={index}
          className="w-14 h-14 rounded-full bg-cream shadow-card flex items-center justify-center cursor-pointer">
          {item.name.charAt(0)}
        </div>
      ))}
    </div>
  );
}

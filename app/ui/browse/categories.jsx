export default function Categories() {
  return (
    <div className="w-full p-5 grid grid-cols-3 grid-rows-4 gap-4 max-sm:grid-cols-2 max-sm:px-1">
      {[1, 2, 3, 4, 6, 7, 8, 8, 9, 10, 12, 13, 14, 15,16].map((item, index) => (
        <div
          key={index}
          className="w-full h-[170px] bg-cream shadow-card flex items-center justify-center flex-none rounded-lg">
          {item}
        </div>
      ))}
    </div>
  );
}

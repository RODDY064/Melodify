import Preview from "./preview";

export default function Intro({ name, desc, total, followers , prev }) {
  function removeHtmlTags(input) {
    return input.replace(/<[^>]*>/g, "");
  }
  return (
    <div>
      <h1 className="my-4 text-4xl font-[500]">{name}</h1>
      <div className="mt-5">
        <h3 className="text-black/80">{removeHtmlTags(desc)}</h3>
        <div className="flex gap-4 text-black/60 ">
          <li className="hover:underline underline-offset-2">Spotify</li>
          <li className="hover:underline underline-offset-2">
            {total}
            <span className="mx-1">Songs</span>
          </li>
          <li className="hover:underline underline-offset-2">{followers.total} <span>Followers</span></li>
        </div>
      </div>
      <Preview prev={prev}/>
    </div>
  );
}

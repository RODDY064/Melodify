import Card from "./card";

const card = ['a', 'b', 'c', 'd', 'e'];
export default function PlaylistToday() {
  return (
    <>
      <Card card={card} />
    </>
  );
}

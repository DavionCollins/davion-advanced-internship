
import AudioPlayerClient from "./AudioPlayerClient";
export default async function AudioPlayer({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );
  const book = await res.json();
  return (
    
    <AudioPlayerClient book={book} />
  );
}

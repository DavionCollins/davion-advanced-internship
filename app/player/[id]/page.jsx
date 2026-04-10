import AudioPlayer from "@/Components/AudioPlayer";
import SearchBar from "@/Components/SearchBar";
import Siderbar from "@/Components/Siderbar";

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
  );
  const book = await res.json();

  return (
    
    <div className="wrapper">
      <SearchBar />
      <Siderbar />
      <div className="player">
        <div className="player__summary">
          <h2 className="player__title">{book.title}</h2>
          <p className="player__summary--text">{book.summary}</p>
        </div>
        
      </div>
      <AudioPlayer params={params} />
    </div>
  );
}

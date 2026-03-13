import ForYou from "@/Components/ForYou";
import SearchBar from "@/Components/SearchBar";
import Siderbar from "@/Components/Siderbar";

const page = () => {
  return (
    <div className="wrapper">
      <SearchBar />
      <Siderbar />
      <ForYou />
    </div>
  );
};

export default page;

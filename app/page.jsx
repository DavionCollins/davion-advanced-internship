import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Landing from "@/Components/Landing";
import Navbar from "@/Components/Navbar";
import Numbers from "@/Components/Numbers";
import Reviews from "@/Components/Reviews";

export default function Home() {
  return (
    <body>
      <Navbar/>
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </body>
  );
}

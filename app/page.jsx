import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Landing from "@/Components/Landing";
import Modal from "@/Components/Modal";
import Navbar from "@/Components/Navbar";
import Numbers from "@/Components/Numbers";
import Reviews from "@/Components/Reviews";

export default function Home() {
  return (
    <div>
      <Modal />
      <Navbar/>
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </div>
  );
}

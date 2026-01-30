import Navbar from "@/Components/Navbar";
import logo from '../public/logo.png'
import Landing from "@/Components/Landing";
import landing from '../public/landing.png'
import Features from "@/Components/Features";
import Review from "@/Components/Review";
import Numbers from "@/Components/Numbers";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    <>
      <Navbar logo={logo}/>
      <Landing landing={landing}/>
      <Features />
      <Review />
      <Numbers/>
      <Footer />
    </>
  );
}

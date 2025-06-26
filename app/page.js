import Hero from "@/components/Herosection/Hero";
import Whoweare from "@/components/Whoweare/Whoweare";
import Count from "@/components/Countup/Count";
import Services from "@/components/Whatwedo/Services";
import Whychoose from "@/components/Whychoose/Whychoose";
import Process from "@/components/Process/Process"
import Reviews from "@/components/Reviews/Reviews";
import Cta from "@/components/Cta/Cta";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div >
      <Hero></Hero>
      <Whoweare></Whoweare>
      <Whychoose></Whychoose>
       <Services></Services>
      <Count></Count>
     <Process></Process>
     <Cta></Cta>
     <Reviews></Reviews>
     <Footer></Footer>



    </div>
  );
}

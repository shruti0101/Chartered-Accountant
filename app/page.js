import Hero from "@/components/Herosection/Hero";
import Whoweare from "@/components/Whoweare/Whoweare";
import Count from "@/components/Countup/Count";
import Services from "@/components/Whatwedo/Services";
import Whychoose from "@/components/Whychoose/Whychoose";
import Process from "@/components/Process/Process"
import Reviews from "@/components/Reviews/Reviews";
import Cta from "@/components/Cta/Cta";
import Faq from "@/components/Faq/Faq";
// import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form"
import Facilites from "@/components/Facilities/Facilities"
export default function Home() {
  return (
    <div >
      <Hero></Hero>
      <Whoweare></Whoweare>
      <Whychoose></Whychoose>
       <Services></Services>
      <Count></Count>
        <Cta></Cta>
     <Process></Process>
   
     <Reviews></Reviews>
    <Facilites></Facilites>
     <Form></Form>
      <Faq></Faq>
   



    </div>
  );
}

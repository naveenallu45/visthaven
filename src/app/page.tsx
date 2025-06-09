
import Home from "./components/Home"
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/Whychooseus";
import Properties from "./components/Properties";
import Aboutus from "./components/Aboutus";
import Agents from "./components/Agents";
import Ourclients from "./components/Ourclients";
import FAQ from "./components/FAQ";
import Contactform from "./components/Contactform";
import Footer from "./components/Footer"







const Page = ()  => {
  return (
    <div>
      <Navbar/>
      <Home />
      <Services />
      <WhyChooseUs/>
      <Properties/>
      <Aboutus/>
      <Agents/>
      <Ourclients/>
      <FAQ/>
      <Contactform/>
      <Footer/>
      

      
    </div>
  );
}

export default Page
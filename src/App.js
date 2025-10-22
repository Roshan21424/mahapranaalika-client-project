import './index.css';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FAQ from './Components/FAQ';
import LandingComponent from './Components/LandingComponent';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Sectors from './Components/Sectors';
import Investments from './Components/Investments';
import Founder from './Components/Founder';



function App() {

  return (
    <div className=" bg-white min-w-screen">
      <Navbar/>
      <LandingComponent/>
      <AboutUs/>
      <Services />
      <Sectors/>
      <Investments/>
      <Founder/>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
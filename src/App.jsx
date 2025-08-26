import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Technologies from "./components/Technologies/Technologies";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Languages from "./components/Languages/Languages";
import Footer from "./components/Footer/Footer";
import Preloader from './components/Preloader/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <HeroSection />
      <Technologies />
      <About />
      <Experience />
      <Education />
      <Languages />
      <Footer />
    </>
  );
}

export default App;

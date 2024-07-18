import { useEffect } from "react";
import NavBar from "./components/NavBar"
import Slogan from "./components/Slogan"
import WelcomeSection from "./components/WelcomeSection"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);
  return (
    <>
      <NavBar />
      <Slogan />
      <WelcomeSection />
    </>
  )
}

export default App

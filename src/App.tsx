import { useEffect } from "react";
import NavBar from "./components/NavBar"
import Slogan from "./components/Slogan"
import WelcomeSection from "./components/WelcomeSection"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: 'ease-in-out', // easing function to use for the animation
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

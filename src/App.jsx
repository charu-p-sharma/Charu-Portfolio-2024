import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Projects";
import MyEducation from "./components/MyEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <MyEducation />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

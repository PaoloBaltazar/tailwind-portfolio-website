import Nav from "./Components/Nav";
import Home from "./Components/Home"; // Add paths as needed
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <div id="Home">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;

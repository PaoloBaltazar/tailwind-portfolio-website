import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Main } from "./Components/Main";

const App = () => {
  return (
    <div className="bg-black">
      <Nav />
      <div id="Home">
        <Home />
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default App;

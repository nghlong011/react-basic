import "./styles/App.scss";
import PreHeader from "./components/Pre_header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Sotical from "./components/Sotical";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PreHeader />
        <Nav />
        <Home />
        <About />
        <Services />
        <Team />
        <Portfolio />
        <Blog />
        <Contact />
        <Sotical />
      </div>
    </BrowserRouter>
  );
}

export default App;

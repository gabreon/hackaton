import "./Main.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import About from "./components/About";
import MiddleLine from "./components/MiddleLine";
import Movement from "./components/Movement";
import BusinessModel from "./components/BusinessModel";
import Challenges from "./components/Challenges";
import Mentors from "./components/Mentors/index.js";
import Partners from "./components/Partners";
import Statute from "./components/Statute";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription/index.js";

function Main() {
  return (
    <div className="Main">
      <Menu />

      <Header />

      <About />

      <MiddleLine />

      <Movement />

      <BusinessModel />

      <Challenges />

      <Mentors />

      <Partners />

      <Statute />

      <Subscription />

      <Footer />
    </div>
  );
}

export default Main;

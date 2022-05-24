import "./App.css";
import Nav from "./Components/Nav";
import HomeSection from "./Components/HomeSection";
import Option1 from "./Components/Option1";
import Option2 from "./Components/Option2";
import Option3 from "./Components/Option3";
import Option4 from "./Components/Option4";
import Footer from "./Components/Footer";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

function App() {
  const [homeRef, homeViewport] = useInView({ threshold: 0.5 });
  const [ref1, viewport1] = useInView({ threshold: .5 });
  const [ref2, viewport2] = useInView({ threshold: 0.3 });
  const [ref3, viewport3] = useInView({ threshold: 0.1 });
  const [ref4, viewport4] = useInView({ threshold: 0.3 });

  const topButtonAnimation = useSpring({
    y: homeViewport ? "50vh" : "0vh",
  });

  return (
    <div className="App">
      <Link activeClass="active" to="home" spy={true} smooth={true}>
        <animated.div
          className="top-button"
          style={topButtonAnimation}
        ></animated.div>
      </Link>

      <Nav />
      <HomeSection homeRef={homeRef} viewport={homeViewport} />
      <Option1 ref1={ref1} viewport={viewport1} />
      <Option2 ref2={ref2} viewport={viewport2} />
      <Option3 ref3={ref3} viewport={viewport3} />
      <Option4 ref4={ref4} viewport={viewport4} />
      <Footer />
    </div>
  );
}

export default App;

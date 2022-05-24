import "./HomeSection.css";
import icon1 from "./media/icons/1.png";
import icon2 from "./media/icons/2.png";
import icon3 from "./media/icons/3.png";
import { animated, useTrail } from "react-spring";
import { Link } from "react-scroll";

function HomeSection(props) {
  const icons = [icon1, icon2, icon3];
  const options = ['option-2', 'option-3','option-4']

  const homeTrail = useTrail(icons.length, {
    scale: props.viewport ? 1 : 0,
    y: props.viewport ? "0vh" : "100vh",
    config: {
      friction: 30,
      tension: 210,
    },
  });

  return (
    <div id='home' className="home-section" ref={props.homeRef}>
      <div className="home-container">
        {homeTrail.map(({ scale, y }, index) => (
          <Link activeClass="active" to={options[index]} spy={true} smooth={true} key={options[index]} offset={-80}>
            <animated.button
              key={icons[index]}
              className="home-ball"
              style={{ scale, y }}
            >
              <img alt="logo" src={icons[index]} />
            </animated.button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeSection;

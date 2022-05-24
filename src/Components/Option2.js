import "./Option2.css";
import logo1 from "./media/icons/1.png";
import logo2 from "./media/icons/2.png";
import logo3 from "./media/icons/3.png";
import logo4 from "./media/icons/4.png";
import logo5 from "./media/icons/5.png";
import logo6 from "./media/icons/6.png";
import logo7 from "./media/icons/7.png";
import logo8 from "./media/icons/8.png";
import { useTrail, animated } from "react-spring";


function Option2(props) {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  const trail = useTrail(logos.length, {
    y: props.viewport ? "0vh" : "-100vh",
    config: {
      friction: 11,
      tension: 200,
      mass: 1.5,
      velocity: 0.009,
    },
  });

  return (
    <div id='option-2' className="option2-section" ref={props.ref2}>
      <div className="option2-container">
        {trail.map(({ y }, index) => (
          <animated.div
            key={logos[index]}
            className="option2-item"
            style={{ y }}
          >
            <img alt="logo" src={logos[index]} />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default Option2;

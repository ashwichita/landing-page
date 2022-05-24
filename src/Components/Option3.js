import "./Option3.css";
import { useTrail, animated, useSpring } from "react-spring";
import { useState } from "react";

function Option3(props) {
  const divs = [1, 2, 3];
  const trail = useTrail(divs.length, {
    scale: props.viewport ? 1 : 0,
    config: {
      friction: 29,
      tension: 246,
      mass: 2,
      velocity: 0.014,
    },
  });
  const buttonAnimation = useSpring({
    scale: props.viewport ? 1 : 0,
    config: {
      friction: 11,
      tension: 200,
      mass: 1.5,
      velocity: 0.009,
    },
  });

  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  const openAnimation = useSpring({
    scale: toggle ? 1 : 0,
  });

  return (
    <div id="option-3" ref={props.ref3} className="option3-section">
      <div className="option3-text-container">
        {trail.map(({ scale }, index) => (
          <animated.div
            key={divs[index]}
            className="option3-text"
            style={{ scale }}
          >
            <h2>Lorem</h2>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </animated.div>
        ))}
      </div>
      <animated.div
        className="option3-image"
        style={buttonAnimation}
        onClick={clickHandler}
      ></animated.div>
      <animated.div
        className="option3-modal"
        style={openAnimation}
        onClick={clickHandler}
      ></animated.div>
    </div>
  );
}

export default Option3;

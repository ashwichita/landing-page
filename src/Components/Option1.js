import "./Option1.css";
import { useSpring, animated, useChain, useSpringRef } from "react-spring";

function Option1(props) {

  const text = ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem\
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae\
  ab illo inventore veritatis et quasi architecto beatae vitae dicta\
  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\
  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\
  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui\
  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed\
  quia non numquam eius modi tempora incidunt ut labore et dolore magnam\
  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum\
  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex\
  ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in\
  ea voluptate velit esse quam nihil molestiae consequatur, vel illum\
  qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et\
  accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium\
  voluptatum deleniti atque corrupti quos dolores et quas molestias\
  excepturi sint occaecati cupiditate non provident, similique sunt in\
  culpa qui officia deserunt mollitia animi, id est laborum et dolorum\
  fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam\
  libero tempore, cum soluta nobis est eligendi optio cumque nihil\
  impedit quo minus id quod maxime placeat facere']

  const titleRef = useSpringRef();
  const titleAnimation = useSpring({
    opacity: props.viewport ? 1 : 0,
    ref: titleRef
  });
  const textRef = useSpringRef();
  const textAnimation = useSpring({
    opacity: props.viewport ? 1 : 0,
    ref: textRef
  });

  useChain([titleRef, textRef], [0, .2])



  return (
    <div id='option-1' className="option1-section" ref={props.ref1}>
      <div className="option1-container">
        <animated.h1 style={titleAnimation}>Services</animated.h1 >
        <animated.p style={textAnimation}>
          {text}
        </animated.p>
      </div>
    </div>
  );
}

export default Option1;

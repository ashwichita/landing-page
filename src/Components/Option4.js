import "./Option4.css";
import icon1 from "./media/icons/contact1.png";
import icon2 from "./media/icons/contact2.png";
import icon3 from "./media/icons/contact3.png";
import icon4 from "./media/icons/contact4.png";
import { useSpring, animated, useTrail } from "react-spring";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const CONTACT_DATA = [
  { icon: icon1, title: "CONTACT@CONTACT.ME", key: 1 },
  { icon: icon2, title: "CONTACT@CONTACT.ME", key: 2 },
  { icon: icon3, title: "CONTACT@CONTACT.ME", key: 3 },
  { icon: icon4, title: "CONTACT@CONTACT.ME", key: 4 },
];

function Option4(props) {

  const { isLoaded } = useLoadScript({googleMapsApiKey: 'AIzaSyAqdzeWEh_uXYUTUfoP4gGRjAtNU_i0ORo'})

  

  const containerAnimation = useSpring({
    scale: props.viewport ? 1 : 0,
    config: {
      friction: 16,
      tension: 200,
      mass: 1.5,
      velocity: 0.002,
    },
  });

  const trail = useTrail(CONTACT_DATA.length, {
    scale: props.viewport ? 1 : 0,
  });

  return (
    <div id="option-4" className="option4-section" ref={props.ref4}>
      <animated.div className="option4-container" style={containerAnimation}>
        <div className="option4-contact-container">
          {trail.map(({ scale }, index) => {
            return (
              <animated.div
                className="option4-contact"
                style={{ scale }}
                key={CONTACT_DATA[index].key}
              >
                <img alt="alt" src={CONTACT_DATA[index].icon}></img>
                <h2>{CONTACT_DATA[index].title}</h2>
              </animated.div>
            );
          })}
        </div>
        <div className="option4-map">
        {(isLoaded) ? <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerClassName='option4-map'><Marker position={{lat: 44, lng: -80}}></Marker></GoogleMap> : <div>...loading</div>}
        </div>
      </animated.div>
    </div>
  );
}

export default Option4;

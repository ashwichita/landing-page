import "./Nav.css";
import {Link} from 'react-scroll';

function Nav() {
  return (
    <ul className="nav">
      <h1><Link activeClass="active" to='home' spy={true} smooth={true}>Landing Page</Link></h1>
      <Link activeClass="active" to='option-1' spy={true} smooth={true} offset={-150}><li>#1</li></Link>
      <Link activeClass="active" to='option-2' spy={true} smooth={true} offset={-80}><li>#2</li></Link>
      <Link activeClass="active" to='option-3' spy={true} smooth={true} offset={-80}><li>#3</li></Link>
      <Link activeClass="active" to='option-4' spy={true} smooth={true} offset={-80}><li>#4</li></Link>
    </ul>
  );
}

export default Nav;

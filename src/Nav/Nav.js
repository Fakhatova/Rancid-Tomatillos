import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
      <h3>Rancid Tomatillos</h3>
      <NavLink to="/">Home</NavLink>
    </nav>
  )
}

export default Nav;

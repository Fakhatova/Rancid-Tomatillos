import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
      <h2>Rancid Tomatillos</h2>
      <NavLink to="/" className="home">Home</NavLink>
    </nav>
  )
}

export default Nav;

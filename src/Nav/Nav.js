import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
      <h1>Rancid Tomatillos</h1>
      <NavLink to="/" className="home">Home</NavLink>
    </nav>
  )
}

export default Nav;

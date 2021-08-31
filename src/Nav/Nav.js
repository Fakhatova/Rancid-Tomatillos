import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
      <h2>Rancid Tomatillos</h2>
      <button onClick={() => goToIndex()}>Home</button>

      <h3>Rancid Tomatillos</h3>
      <NavLink to="/">Home</NavLink>
    </nav>
  )
}

export default Nav;

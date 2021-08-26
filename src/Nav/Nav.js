import './Nav.css';


const Nav = ({ goToIndex }) => {
  return (
    <nav>
      <h3>Rancid Tomatillos</h3>
      <button onClick={() => goToIndex()}>Home</button>
    </nav>
  )
}

export default Nav;

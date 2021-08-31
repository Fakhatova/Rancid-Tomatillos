import './Nav.css';


const Nav = ({ goToIndex }) => {
  return (
    <nav>
      <h2>Rancid Tomatillos</h2>
      <button onClick={() => goToIndex()}>Home</button>
    </nav>
  )
}

export default Nav;

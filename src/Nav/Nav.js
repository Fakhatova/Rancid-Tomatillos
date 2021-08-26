import './Nav.css';


const Nav = ({ goToIndex }) => {
  return (
    <navbar>
      <h3>Rancid Tomatillos</h3>
      <button onClick={() => goToIndex()}>Home</button>
    </navbar>
  )
}

export default Nav;

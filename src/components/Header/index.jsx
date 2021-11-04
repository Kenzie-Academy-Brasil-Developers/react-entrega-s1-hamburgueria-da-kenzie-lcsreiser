import "./styles.css";
import Nav from "../Nav";

function Header({ showProducts }) {
  return (
    <div className="divHeader">
      <h2>Burguer Kenzie</h2>
      <Nav showProducts={showProducts} />
    </div>
  );
}

export default Header;

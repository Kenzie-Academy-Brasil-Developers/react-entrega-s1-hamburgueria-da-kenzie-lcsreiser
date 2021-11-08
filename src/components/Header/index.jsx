import "./styles.css";
import Nav from "../Nav";

function Header({ showProducts }) {
  return (
    <div className="divHeader">
      <h2>
        Burguer <h7>Kenzie</h7>
      </h2>
      <Nav showProducts={showProducts} />
    </div>
  );
}

export default Header;

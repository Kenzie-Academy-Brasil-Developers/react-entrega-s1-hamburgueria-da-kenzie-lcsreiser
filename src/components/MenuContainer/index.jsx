import Product from "../Product";
import "./styles.css";

function MenuContainer({ handleClick, filteredProducts }) {
  return (
    <div className="divMenuContainer">
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default MenuContainer;

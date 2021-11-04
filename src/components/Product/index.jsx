import "./styles.css";

function Product({ product, handleClick }) {
  return (
    <div className="divProduct">
      <div className="divImage">
        <img className="image" src={product.img} alt="" />
      </div>
      <div>
        <p>{product.category}</p>
        <p>{product.name}</p>
        <p>R$ {product.price}</p>
        <button onClick={() => handleClick(product)}>Adicionar</button>
      </div>
    </div>
  );
}

export default Product;

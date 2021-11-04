import "./styles.css";

function Aside({ currentSale, setCurrentSale }) {
  function remover(productId) {
    const remove = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(remove);
  }

  const round = (num, places) => {
    return +parseFloat(num).toFixed(places);
  };

  return (
    <div className="divAside">
      <h3 className="shopCar">Carrinho de compras</h3>
      {currentSale.map((product) => (
        <div key={product.id} className="buyList-image">
          <img className="imageCar" src={product.img} alt="" />
          <div className="buyList-descrip">
            <p className="productAdd">{product.name}</p>
            <button
              className="buttonRemove"
              onClick={() => remover(product.id)}
            >
              Remover
            </button>
            <p>{product.category}</p>
          </div>
        </div>
      ))}
      <div className="divTotal">
        <p>Total: </p>
        <p>
          R$
          {currentSale.reduce((acc, curr) => round(acc + curr.price, 2), 0)}
        </p>
      </div>
      <button className="removeAll" onClick={() => setCurrentSale([])}>
        Remover todos
      </button>
    </div>
  );
}

export default Aside;

//(Math.round(num * 100) / 100).toFixed(2)

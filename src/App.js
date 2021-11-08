import "./reset.css";
import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (desiredProduct) => {
    setFilteredProducts(products);
    if (desiredProduct === "") return setFilteredProducts(products);
    const productsFiltred = products.filter(
      (product) =>
        product.name.toLowerCase() === desiredProduct ||
        product.category.toLowerCase() === desiredProduct
    );
    setFilteredProducts(productsFiltred);
  };

  const handleClick = (product) => {
    const productFiltred = currentSale.includes(product);

    !productFiltred && setCurrentSale([...currentSale, product]);
  };

  return (
    <div className="divContainer">
      <Header showProducts={showProducts} />
      <MenuContainer
        products={products}
        handleClick={handleClick}
        filteredProducts={filteredProducts}
      />
      <Aside currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </div>
  );
}

export default App;

//Excluir do carrinho
//Excluir todos
//Não pode deixar itens repetidos no carrinho
//Total dando um bug

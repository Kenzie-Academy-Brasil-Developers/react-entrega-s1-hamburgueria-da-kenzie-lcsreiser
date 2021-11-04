import "./styles.css";
import { useState } from "react";

//import Button from "../Button";

function Nav({ showProducts }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="divNav">
      <input
        type="text"
        value={userInput}
        placeholder="Digitar Pesquisa"
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => showProducts(userInput.toLowerCase())}>
        Pesquisar
      </button>
    </div>
  );
}

export default Nav;

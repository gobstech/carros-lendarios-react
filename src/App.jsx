import { useState } from "react";
import Titulo from "./componentes/Titulo/";
import carrosArray from "./carros";
import "./style.css";

function App() {
  const [index, setIndex] = useState(0);

  console.log(index);

  function avancar() {
    setIndex(index + 1);
    console.log(index, "Avançou");
  }

  function voltar() {
    setIndex(index - 1);
    console.log(index, "Voltou");
  }

  let carro = carrosArray[index];

  console.log(carro.titulo);
  return (
    <>
      <Titulo title="Carros lendários do Brasil" />
      <button onClick={voltar} disabled={index == 0 ? true : false}>
        Voltar
      </button>
      <button
        onClick={avancar}
        disabled={index == carrosArray.length - 1 ? true : false}
      >
        Avançar
      </button>

      <h2>{carro.titulo}</h2>
      <div className="grid">
        <div className="foto">
          <img src={carro.imagem} alt={carro.titulo} />
        </div>
        <div className="descricao">
          <p>{carro.descricao}</p>
        </div>
      </div>
    </>
  );
}

export default App;

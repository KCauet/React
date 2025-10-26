import './App.css';
import Botao from './components/Botao';
import { useState } from 'react';

function App() {

  const [valor, setValue] = useState(0)

  let novo_valor = valor;

  function add() {
    novo_valor += 1
    setValue(novo_valor)
  }

  function remove() {
    if (valor != 0) {
      novo_valor -= 1
      setValue(novo_valor) 
    }
  }

  return (
    <div className="App">
      <Botao text={"Adicionar 1"} event={add}/>
      <Botao text={"Diminuir 1"} event={remove}/>
      <p>{valor}</p>
    </div>
  );
}

export default App;
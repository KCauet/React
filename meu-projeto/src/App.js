import './App.css';
import {useState} from 'react';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicionais from './components/Condicionais';
import States from './components/States';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Sauda from './components/Sauda';
import Pratica from './components/Pratica';

function App() {

  const meusItens = ['React', 'vue', 'angular'];
  const minhaList = []
  const [nome, setNome] = useState()
  const [cor, setCor] = useState("red")

  let number = 5;
  // Exemplo de uso de dicionarios no if de crakudo
  let arr = [{
    "nome": "João",
    "idade": 33
  }]

  return (
    <div className="App">
      <h1>Render de listas</h1>
      <Evento />
      <Form />
      <Condicionais />  
      <States />
      <OutraLista items={meusItens}/>
      <OutraLista items={minhaList}/>
      
      <p>If de crakudo</p>
      {number == 5 ? (
        <p>{number + 1}</p>
      ) : (
        <p>{number - 1}</p>
      )}

      {arr[0]['idade'] > 30 ? (
        <p>{arr[0]['nome']}</p>
      ) : (
        <p>{arr[0]['idade']}</p>
      )}

      <SeuNome setNome={setNome} />
      <Sauda nome={nome}/>

      <Pratica cor={cor} setCor={setCor}/>

    </div>
  );
}

export default App;
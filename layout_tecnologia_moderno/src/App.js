import './App.css';
import Card from './components/Card';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>Bem vindo</h1>
        </div>
      </header>

      <main>
        <div className='elements'>
          <div className='cards'>
            <Card titulo={"Card"} desc={"Um texto rei paia aqui pra completar meu vazio no design"}/>
            <Card titulo={"Card"} desc={"Um texto rei paia aqui pra completar meu vazio no design"}/>
            <Card titulo={"Card"} desc={"Um texto rei paia aqui pra completar meu vazio no design"}/>
          </div>
          <Board text={"Praia"} desc={"Aqui vem um texto para eu conseguir visualizar todo o conteúdo exibido no board"}/>
        </div>
        
      </main>
    </div>
  );
}

export default App;

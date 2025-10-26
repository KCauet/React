import './App.css';
import MenuHam from './components/MenuHam';
import SiteLogo from './Images/wikipediaLogo.png';

function App() {
  return (
    <div className="App">
      <header>
        <MenuHam />

        <div style={{marginLeft: '30px',marginRight: '30px'}}>
          <p style={{fontWeight: 700, fontSize: "28px"}}><strong>WikipediA</strong></p>
          <p>A enciclopedia livre</p>
        </div>

        <input type='text' placeholder='Pesquisar na wikipédia'/>
        <label><button>Pesquisar</button></label>
      </header>
      
    </div>
  );
}

export default App;

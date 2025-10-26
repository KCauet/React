import './App.css'
import BCsIMG from "./assets/bras_cubas.jpeg"

function App() {

  const infoLivro = {
    nome: 'Memórias póstumas de brás cubas',
    autor: "Machado de Assis",
    totalCapitulos: 2,
    capa: ""
  }

  return (
    <>
      <img src={BCsIMG} alt="" />
    </>
  )
}

export default App
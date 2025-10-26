import Frase from './Frase' // Posso importar componentes dentro de outros componentes e utiliza-los como faço com funções

function HelloWorld() {
    return (
        <>
            <h1>Componente</h1>
            <Frase/>
        </>
    )
}

export default HelloWorld
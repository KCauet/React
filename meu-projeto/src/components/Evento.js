import Button from "./evento/Button"

function Evento() {

    function meuEvento() {
        alert("Codigo ativado") // Eventos dentro dos componentes tem essa estrutura aqui we
    }

    function segundoEvento() {
        alert("Outro evento aqui")
    }

    return (
        <>
            <p>Clique aqui embaixo</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </>
    )

}

export default Evento
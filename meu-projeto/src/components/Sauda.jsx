function Sauda({nome}) {
    // Estou tratando dados vindos de um state lift ou seja um metodo de outro componente, tratamento de dados

    function gerarSaudas(algumNome) {

        if (algumNome == undefined || algumNome == "") {
            return "Nada escrito ainda"
        } else {
            return algumNome
        }
        
    }

    return (
        <>
            <p>{gerarSaudas(nome)}</p>
        </>
    )
}

export default Sauda
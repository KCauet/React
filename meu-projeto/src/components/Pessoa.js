function Pessoa({nome, idade, foto}) { // Praticamente como tu pegaria as variaveis normalmente em uma função só que agora entre {}
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
        </div>
    )
}

export default Pessoa
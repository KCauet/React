function Tarefa({dict, enviarID, removerTarefa}) {

    return (
        <>
            <ul>
                {dict.map((objeto, i) => (
                    <li key={i} style={{textDecoration: objeto.concluida ? 'line-through' : 'none'}}>
                        Titulo: {objeto['titulo']}
                        Tarefa: {objeto['task']}
                        <button onClick={() => enviarID(i)}>Concluida</button>
                        <button onClick={() => removerTarefa(i)}>Remover</button>
                    </li>
                ))}
            </ul>
            
        </>
    )
}

export default Tarefa
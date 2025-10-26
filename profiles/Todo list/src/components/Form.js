import { useState } from "react"
import Tarefa from "./Tarefa"

function Form() {
    
    const [lista, setTarefas] = useState([])
    const [task, setTask] = useState("")
    const [title, setTitle] = useState("")

    function adicionarTarefa(e) {
        e.preventDefault()
        let values = {
            "titulo": title,
            "task": task,
            "concluida": false
        }

        const nova_lista = [...lista, values];

        setTarefas(nova_lista)

        console.log(nova_lista)


    }

    function enviarID(index) {
        const novaLista = lista.map((item, i) => {
        if (i === index) {
            return { ...item, concluida: !item.concluida };
            }
            return item;
        });
        setTarefas(novaLista);
    }

    function removerTarefa(index) {
        const novaLista = lista.filter((_, i) => i !== index);
        setTarefas(novaLista);
    }

    

    return (
        <>

            <form onSubmit={adicionarTarefa}>
                <label htmlFor="Title">Titulo</label>
                <input type="text" name="Title" placeholder="Digite aqui" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="Tarefa">Tarefa</label>
                <input type="text" name="Tarefa" placeholder="Digite aqui" value={task} onChange={(e) => setTask(e.target.value)}/>

                <div>
                    <input type="submit" value="Confirmar"/>
                </div>
            </form>
            <Tarefa dict={lista} enviarID={enviarID} removerTarefa={removerTarefa}/>
            
        </>
    )
}

export default Form
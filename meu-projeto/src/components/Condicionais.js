import { useState } from "react"

function Condicionais() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    let ti = 5;
    let oa = 8;

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail("")
    }

    return (
        <div>
            <h2>Cadastre</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail} >Enviar e-mail</button>

                {userEmail && (
                    <div>
                        <p>Email:{userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
                
                <p>Estrutura do if com mais de uma comparaçãp</p>
                {ti == 5 && oa == 8 && ( 
                    <div>
                        <p>Ti = 5</p>
                    </div>
                )}
                <p>Estrutura de if simples</p>
                {ti == 5 && ( // esse ultimo && ele serve como se fosse o if no inicio só que agr no final da lógica 
                    <div>
                        <p>Ti = 5</p>
                    </div>
                )}

                

            </form>
            
        </div>
    )
}

export default Condicionais
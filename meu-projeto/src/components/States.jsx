import { useState } from "react";

function States() {

    const [count, setCount] = useState(0)

    function decrementCount() {
        //Aqui eu uso essa variavel criada pra poder tirar um do count da forma correta pois, nenhum está usando o contador inicial direto
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default States
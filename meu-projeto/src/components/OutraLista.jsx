function OutraLista({items}) {
    return (
        <>
            <h3>Lista de coisas:</h3>
            {items.length > 0 ? (
                items.map((item, i) => (
                    <p key={i}>{i}. {item}</p>
                ))
            ) : (
                <p>N deu bom oh</p>
            )}
        </>
    )
}

export default OutraLista
import Item from './Item'


function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1984}/>
                <Item marca="Fiat" ano_lancamento={1990}/>
            </ul>
        </>
    )
}

export default List
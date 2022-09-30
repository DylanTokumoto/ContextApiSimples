import { useContext } from 'react';
import ContextoLista from "../context/ContextoWine";

import Item from './Item';
import '../styles/lista.css'

function Lista() {

    const [produtos] = useContext(ContextoLista);

    return (
        <div >
        <ul className="listaProdutos">
            {
                produtos.map(produto => <Item produto={ produto } />)
            }
        </ul>
        </div>
    )
}

export default Lista;
import { useContext } from "react";
import ContextoLista from "../context/ContextoWine";

function Item({produto}) {

    const addToCart = useContext(ContextoLista)

    return (
        <div>
            <img src={produto.image} alt="" />
        <li> {produto.title} - R$ {produto.price} <button onClick={() => addToCart(produto)}>comprar</button></li>
        </div>
    );
}

export default Item;
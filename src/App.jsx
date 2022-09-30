import { useEffect, useState } from "react";

import Lista from "./components/Lista";
import ContextoLista from "./context/ContextoWine";

import './styles/app.css'

function App() {



	const [produtos, definirProdutos] = useState([]);

	const [carrinho, setCarrinho] = useState([]);

	useEffect(() => {

		if (localStorage.getItem('produtos') == null) {
			fetch('http://54.215.156.182:8081/products')
				.then(resposta => resposta.json())
				.then(listaDeProdutos => {
					definirProdutos(listaDeProdutos);
					localStorage.setItem("produtos", JSON.stringify(listaDeProdutos))
				});
		}
		else {
			definirProdutos(JSON.parse(localStorage.getItem('produtos')));
		}

	}, []);

	const addToCart = (produto) =>  {
		setCarrinho(...[produto])
	}

	return (
		<>
			<ContextoLista.Provider value={[produtos, definirProdutos, carrinho, setCarrinho, addToCart]}>
				<div className="main">
					<h1>Minha lista</h1>
					<button>carrinho</button>
				</div>
				<Lista />

			</ContextoLista.Provider>
		</>
	)
}

export default App
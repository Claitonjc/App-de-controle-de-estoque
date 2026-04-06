import { totaisQuantidade, totaisValor, totalEstoque, totalValor, lista } from "./dom.js";
import { calcularEstoque, calcularValor } from "./calculos.js";
import { produtos, elementos, selectClicado } from "./state.js";
import { adicionarProduto } from "./crud.js";
import { filtros } from "./filtros.js";

// Função que faz a renderização inicial
export const renderInicial = (listaProdutos) => {
    lista.innerHTML = '';
    elementos.clear();
    listaProdutos.forEach(item => {
        adicionarProduto(item);
    })
}


// Função que cria e mostra os totais de preço e estoque na tela
export const renderizarTotais = () => {
    totalEstoque.textContent = `${calcularEstoque()} unidade(s)`;
    totalValor.textContent = calcularValor();

    totaisQuantidade.append(totalEstoque);
    totaisValor.append(totalValor);
}
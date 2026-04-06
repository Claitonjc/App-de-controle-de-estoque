import { produtos } from "./state.js";

// Função que calcula o estoque total
export const calcularEstoque = () => 
    produtos.reduce((acc, produto) => acc + produto.quantidade, 0);


// Função que calcula o valor total dos produtos
export const calcularValor = () => {
    let valorTotal = produtos.reduce((
        acc, produto) => acc += (produto.preco * produto.quantidade)
    ,0);

    return valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}
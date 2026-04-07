import { produtos, setProdutosOrdenados, produtosOrdenados, setSelectClicado } from "./state.js";
import { renderInicial } from "./render.js";
import { salvar } from "./storage.js";
import { select } from "./dom.js";

export const filtros = (value) => {
    const metodos = {
        nome: (a, b) => a.produto.localeCompare(b.produto, 'pt-BR', {sensitivity: 'base'}),
        preco: (a, b) => a.preco - b.preco,
        quantidade: (a, b) => a.quantidade - b.quantidade
    };

    setProdutosOrdenados([...produtos].sort(metodos[value]));



// Utilizando o método sort() com if para ordenar os produtos
    // if(value === 'nome') {
    //     produtos.sort((a, b) => 
    //         a.produto.localeCompare(b.produto, 'pt-BR', {sensitivity: 'base'})
    //     )
    // } else if(value === 'preco') {
    //     produtos.sort((a, b) => a.preco - b.preco);
    // } else if(value === 'quantidade') {
    //     produtos.sort((a, b) => a.quantidade - b.quantidade);
    // }



// Ordenando os produtos com if e for sem o método sort()
    // if(value === 'nome') {
    //     for(let i = 0; i < produtos.length - 1; i++) {
    //         for(let j = i + 1; j < produtos.length; j++) {
    //             if(produtos[i].produto.toLowerCase() > produtos[j].produto.toLowerCase()) {
    //                 let aux = produtos[i];
    //                 produtos[i] = produtos[j];
    //                 produtos[j] = aux;
    //             }
    //         }
    //     }
    // } else if(value === 'preco') {
    //             for(let i = 0; i < produtos.length - 1; i++) {
    //                 for(let j = i + 1; j < produtos.length; j++) {
    //                     if(produtos[i].preco > produtos[j].preco) {
    //                         let aux = produtos[i];
    //                         produtos[i] = produtos[j];
    //                         produtos[j] = aux;
    //                     }
    //                 }
    //             }
    // } else if(value === 'quantidade') {
    //             for(let i = 0; i < produtos.length - 1; i++) {
    //                 for(let j = i + 1; j < produtos.length; j++) {
    //                     if(produtos[i].quantidade > produtos[j].quantidade) {
    //                         let aux = produtos[i];
    //                         produtos[i] = produtos[j];
    //                         produtos[j] = aux;
    //                     }
    //                 }
    //             }

    // }
    renderInicial(produtosOrdenados);
    salvar();
}

export const buscarProduto = (texto) => {
    if(texto === '') return produtos;

    const produtosFiltrados = produtos.filter(item => item.produto.toLowerCase().includes(texto.toLowerCase()))
    return produtosFiltrados;
}

export const inicializarFiltro = () => {
    const valor = localStorage.getItem('select') || 'nome';
    setSelectClicado(valor);
    select.value = valor;
    filtros(valor);
}
// Variáveis
export let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
export let elementos = new Map();
export let idParaExcluir = null;
export let produtosOrdenados = JSON.parse(localStorage.getItem('ordem')) || [];
export let selectClicado = localStorage.getItem('select') || 'nome';

export const setIdParaExcluir = (id) => {
    idParaExcluir = id;
};

export const setProdutos = (novosProdutos) => {
    produtos = novosProdutos;
};

export const setProdutosOrdenados = (novosProdutosOrdenados) => {
    produtosOrdenados = novosProdutosOrdenados;
}

export const setSelectClicado = (novoSelect) => {
    selectClicado = novoSelect;
}
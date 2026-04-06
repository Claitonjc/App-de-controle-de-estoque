import { produtos, elementos, setProdutos, setIdParaExcluir } from "./state.js";
import { renderizarTotais } from "./render.js";
import { salvar } from "./storage.js";
import { popUp, lista } from "./dom.js";

// Função que adiciona o produto na lista
export const adicionarProduto = (item) => {
    const li = criarElemento(item);
    lista.append(li);
    elementos.set(item.id, li);
}

// Função que cria o elemento
export const criarElemento = (item) => {
    const li = document.createElement('li');
    li.className = 'item_lista';
    li.dataset.id = item.id;

    const spanProduto = document.createElement('span');
    spanProduto.textContent = `Produto: ${item.produto}`;

    const spanPreco = document.createElement('span');
    spanPreco.textContent = `Preço: ${item.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`;
    spanPreco.className = 'precoProduto';

    const spanQuantidade = document.createElement('span');
    spanQuantidade.textContent = `Quantidade: ${item.quantidade} unidade(s)`;
    spanQuantidade.className = 'quantidadeProduto';

    const labelEditPreco = document.createElement('label');
    labelEditPreco.textContent = 'Editar Preço:';

    const inputEditPreco = document.createElement('input');
    inputEditPreco.type = 'number';
    inputEditPreco.placeholder = item.preco;
    inputEditPreco.className = 'editPreco';
    labelEditPreco.append(inputEditPreco);

    const labelEditEstoque = document.createElement('label');
    labelEditEstoque.textContent = 'Editar Estoque:';

    const inputEditEstoque = document.createElement('input');
    inputEditEstoque.type = 'number';
    inputEditEstoque.placeholder = item.quantidade;
    inputEditEstoque.className = 'editEstoque';
    labelEditEstoque.append(inputEditEstoque);

    const botaoConcluir = document.createElement('button');
    botaoConcluir.dataset.id = item.id;
    botaoConcluir.className = 'editar';
    botaoConcluir.textContent = 'Concluir';

    const botaoExcluir = document.createElement('button');
    botaoExcluir.dataset.id = item.id;
    botaoExcluir.className = 'excluir';
    botaoExcluir.textContent = 'Excluir estoque';

    li.append(
        spanProduto, 
        spanPreco, 
        spanQuantidade,
        labelEditPreco,
        labelEditEstoque,
        botaoConcluir,
        botaoExcluir);

    return li;
}


// Função que edita os dados
export const editarDados = (id, preco, quantidade) => {
    const li = elementos.get(id);
    
    const produtoEditado = produtos.find(item => item.id === id);
    if(!li || !produtoEditado) return

    produtoEditado.preco = preco;
    produtoEditado.quantidade = quantidade;


    li.querySelector('.precoProduto').textContent = `Preço: ${produtoEditado.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`
    li.querySelector('.quantidadeProduto').textContent = `Estoque: ${produtoEditado.quantidade}`;

    renderizarTotais();
    salvar();
}



// Função que exclui um produto
export const excluirProduto = (id) => {
    setProdutos(produtos.filter(item => item.id !== id));

    const li = elementos.get(id);
    li.remove();
    elementos.delete(id);

    setIdParaExcluir(null);
    popUp.style.display = 'none'

    renderizarTotais();
    salvar();
}

// Função que exclui a lista inteira
export const excluirLista = () => {
    setProdutos([]);
    lista.innerHTML = '';
    popUp.style.display = 'none';

    renderizarTotais();
    salvar();
}
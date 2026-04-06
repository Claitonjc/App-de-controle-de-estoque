
import { adicionarProduto, editarDados, excluirLista, excluirProduto } from "./crud.js";
import { filtros, inicializarFiltro } from "./filtros.js";
import { renderInicial, renderizarTotais } from "./render.js";
import { produtos, elementos, idParaExcluir, setIdParaExcluir, setSelectClicado } from "./state.js";
import { salvar } from "./storage.js";
import { buscarProduto } from "./filtros.js";
import { buscar } from "./dom.js";
import { 
    secaoAdicaoProdutos,
    botaoAdicionar,
    botaoLimpar,
    lista,
    popUp,
    preco,
    produto,
    quantidade,
    select,
} from "./dom.js";





// Eventos 
botaoAdicionar.addEventListener('click', () => {
    if(!produto.value.trim() || Number(preco.value) <= 0 || Number(quantidade.value) < 0) return;
    
    const novoProduto = {
        id: Date.now(),
        produto: produto.value,
        preco: Number(preco.value),
        quantidade: Number(quantidade.value)
    };
    
    produtos.push(novoProduto);
    
    adicionarProduto(novoProduto);
    renderizarTotais();
    inicializarFiltro();
    salvar();
    
    produto.value = '';
    preco.value = '';
    quantidade.value = '';
});


lista.addEventListener('click', (evento) => {
    const elemento = evento.target;
    const id = Number(evento.target.dataset.id);
    
    if(elemento.classList.contains('excluir')) {
        setIdParaExcluir(id);
        popUp.style.display = 'block';
    
    }
    
    if(elemento.classList.contains('editar')) {
        const id = Number(evento.target.dataset.id);
        const li = elementos.get(id);
        
        const precoEditado = Number(li.querySelector('.editPreco').value);
        const estoqueEditado = Number(li.querySelector('.editEstoque'). value);
        
        editarDados(id, precoEditado, estoqueEditado);
    }
})

secaoAdicaoProdutos.addEventListener('keydown', (evento) => {
    if(evento.key === 'Enter') {
        botaoAdicionar.click();
    }
})

botaoLimpar.addEventListener('click', () => {
    popUp.style.display = 'block';
})

popUp.addEventListener('click', (evento) => {
    const elemento = evento.target;

    if(elemento.classList.contains('pop_up-sim')) {
        if(idParaExcluir) {
            excluirProduto(idParaExcluir);
        } else {
            excluirLista();
        }
    } else {
        popUp.style.display = 'none';
    }
})

select.addEventListener('change', (evento) => {
        setSelectClicado(evento.target.value);
        filtros(evento.target.value);
})

buscar.addEventListener('input', (evento) => {
        const listaFiltrada = buscarProduto(evento.target.value);
        renderInicial(listaFiltrada);
})


// Inicialização
renderizarTotais()
renderInicial(produtos);
inicializarFiltro();
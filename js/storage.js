import { produtos } from "./state.js";
import { produtosOrdenados, selectClicado } from "./state.js"; 

export const salvar = () => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
    localStorage.setItem('ordem', JSON.stringify(produtosOrdenados));
    localStorage.setItem('select', selectClicado);
}
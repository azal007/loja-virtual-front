import { Produto } from "./Produto";

export interface ProdutoCarrinho {
    produto: Produto;
    quantidade: number;
}
import { Injectable } from "@nestjs/common";
import Produto from "./produtos.model"

@Injectable()
export class ProdutosService {
      // Mock de produtos
  produtos: Produto[] = [
    new Produto('lIV01', 'Livro TDD e BDD na Pratica', 29.9),
    new Produto('lIV02', 'Livro Iniciando com Flutter', 39.9),
    new Produto('lIV01', 'Inteligência artificial como serviço', 48.9),
  ];

  obterTodos(): Produto[] {
      return this.produtos
  }

  obterUm(id: number): Produto {
    return this.produtos[0]
  }

  criar(produto: Produto) {
      this.produtos.push(produto)
  }

  alterar(produto: Produto): Produto{
      return produto
  }

  apagar(id: number){
      this.produtos.pop()
  }
}
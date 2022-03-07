import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import Produto from './produtos.model';

@Controller('produtos')
export class ProdutosController {
  // Mock de produtos
  produtos: Produto[] = [
    new Produto('lIV01', 'Livro TDD e BDD na Pratica', 29.9),
    new Produto('lIV02', 'Livro Iniciando com Flutter', 39.9),
    new Produto('lIV01', 'Inteligência artificial como serviço', 49.9),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() produto: Produto): Produto {
    return this.produtos[0];
  }

  @Post()
  criar(@Body() produto: Produto){
    produto.id = 100
    this.produtos.push(produto)

  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  deletar(@Param() params) {
    this.produtos.pop()
  }
}

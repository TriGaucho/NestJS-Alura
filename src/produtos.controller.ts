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
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {

  constructor(private produtosService: ProdutosService){

  }

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Produto){
    this.produtosService.criar(produto)
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto)
  }

  @Delete(':id')
  deletar(@Param() params) {
    this.produtosService.apagar(params.id)
  }
}

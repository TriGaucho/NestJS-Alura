import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados produto ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    return `Produto criado ${JSON.stringify(produto)}`;
  }

  @Put()
  alterar(@Body() produto): string {
    return `Produto alterado ${JSON.stringify(produto)}`;
  }

  @Delete(':id')
  deletar(@Param() params): string {
    return `Produto ${params.id}`;
  }
}

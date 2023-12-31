import { Injectable } from '@angular/core';
import { Produto } from '../models/produto'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    {
      cod: 101,
      nome: 'Body',
      descricao: 'Unissex, tamanho (1) ',
      nomeprov: 'Camila Araujo',
      email: 'camila.araujo@gmail.com',
      contato: 1793957.5475,
      imagem: 'https://m.media-amazon.com/images/I/51lsPrslt0L._AC_SX569_.jpg'
    },
    {
      cod: 102,
      nome: 'Camiseta',
      descricao: 'Masculina, tamanho (P)',
      nomeprov: 'Paula Nobrega',
      email: 'paulinha@outlook.com',
      contato: 1993252.7591,
      imagem: 'https://paoladavinci.vtexassets.com/arquivos/ids/234483-1200-auto?v=637707716883230000&width=1200&height=auto&aspect=true'
    },
    {
      cod: 103,
      nome: 'Short',
      descricao: 'Feminino, tamanho (P)',
      nomeprov: 'Maria Silva',
      email: 'marisilva@gmail.com',
      contato: 1793824.3558,
      imagem: 'https://4949028l.ha.azioncdn.net/img/2021/08/produto/3928/1-2170-short-bebe-menina-em-plush-runner-poliester-bem-vestir-shorts.jpg?ims=fit-in/630x945/filters:fill(white)'
    },
    {
      cod: 104,
      nome: 'Macacão de Pelúcia',
      descricao: 'Macacão de Pelúcia, tamanho(1)',
      nomeprov: 'Cleusa Cruz',
      email: 'clehcruz@hotmail.com',
      contato: 1593354.3093,
      imagem: 'https://m.media-amazon.com/images/I/81rx2bNX2JL._AC_SX569_.jpg'
    },
  ];

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  getProduto(cod: number): Produto | undefined {
    return this.produtos.find((prod) => prod.cod == cod)
  }
}

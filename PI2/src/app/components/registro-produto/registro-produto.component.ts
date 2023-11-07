import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-produto',
  templateUrl: './registro-produto.component.html',
  styleUrls: ['./registro-produto.component.css']
})
export class RegistroProdutoComponent {
  produto = {
    nome: '',
    descricao: '',
    tamanho: ''
  };

  adicionarItem() {
    alert("Produto cadastrado. Obrigado por participar da campanha!");
  }
  
  cadastrarProduto() {
    console.log('Produto cadastrado:', this.produto);
  }
}

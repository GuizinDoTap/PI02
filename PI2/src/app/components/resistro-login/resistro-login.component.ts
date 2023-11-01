import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-resistro-login',
  templateUrl: './resistro-login.component.html',
  styleUrls: ['./resistro-login.component.css']
})
export class ResistroLoginComponent {
  usuario: Usuario = {
    nome: '',
    email: '',
    endereco: {
      cidade: '',
      estado: ''
    }
  }
  
  aviso_registro() {
    alert("Registro efetuado!");
  }

  onSubmit() {
    console.log(this.usuario);
  }
}


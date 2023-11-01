import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private email: string = 'teste123@teste.com';
  private senha: string = '12345';
  logado: boolean = false;

  login(email: string, senha: string): boolean {
    if(email == this.email && senha == this.senha) {
      this.logado = true;
    }

    return this.logado;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    // arquivo local gerado com chave token e valor senhatokenficticio
    localStorage.setItem('token', 'senhatokenficticio')
  }
  doLogout(){
    // qnd clica em logout limpa o valor e com a regra de negocio gerada na auth.guard sem o token nao acessa produtos
    localStorage.clear()
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-loging',
  imports: [],
  templateUrl: './loging.component.html',
  styleUrl: './loging.component.css'
})
export class LogingComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    private service: LoginService
  ){}

  logar(){
    this.service.doLogin()
  }

  deslogar() {
    this.service.doLogout()
  }
}

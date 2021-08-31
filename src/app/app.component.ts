import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'ecomercce';

  adm(){
    let adm = String(prompt("Digite a senha de ADM: "));
    let senha = localStorage.getItem('token');
    let senhaSemAspas = (senha?.replace(/['"]+/g, ''));
    if(adm == senhaSemAspas){
      alert("Acesso liberado.");
      this.router.navigate(["/admin"]);
    }
    else{
      alert("Acesso negado.");    
      }
  }
}

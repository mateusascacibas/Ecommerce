import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { DescricaoComponent } from './componentes/descricao/descricao.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NaoEncontradoComponent } from './componentes/nao-encontrado/nao-encontrado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    DescricaoComponent,
    PrincipalComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

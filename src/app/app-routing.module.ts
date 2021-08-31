import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { DescricaoComponent } from './componentes/descricao/descricao.component';
import { NaoEncontradoComponent } from './componentes/nao-encontrado/nao-encontrado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { GuardsGuard } from "./guards.guard";

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'descricao/:id', component: DescricaoComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: '**', component: NaoEncontradoComponent, canActivate: [GuardsGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

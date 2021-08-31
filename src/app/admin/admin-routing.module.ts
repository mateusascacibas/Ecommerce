import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from '../guards.guard';
import { AdminComponent } from './admin.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';

const routes: Routes = [{ path: '', component: PedidoComponent, canActivate: [GuardsGuard]}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

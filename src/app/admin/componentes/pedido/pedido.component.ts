import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pedidos_mock } from 'src/app/models/pedido.mock';
import { Pedido } from 'src/app/models/pedidos';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private produtosService: ProdutosService) { }

  idPedido = 0;
  pedido: any;

  
  pedidos: Pedido[] = [];
  
  private carregarPedidos(){
    this.pedidos = this.produtosService.listarTodos();
  }

  ngOnInit(): void {
    this.carregarPedidos(); 
  }
}

import { Component, OnInit } from '@angular/core';
import { pedidos_mock } from 'src/app/models/pedido.mock';
import { Pedido } from 'src/app/models/pedidos';
import { Produto } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  produtos: Produto[] = [];
  constructor( private produtoService: ProdutosService) { }
  filtro: string = '';
  pagina: number = 0;
  currentPage: number = 0;
  
  private carregarProdutos(){
    this.produtos = this.produtoService.listarPaginado(this.pagina);
  }
  ngOnInit(): void {
    localStorage['pedidoscarregados'] = JSON.stringify(localStorage["pedidos"])
    this.produtoService.criarSenha();
    this.carregarProdutos();
  }

  
  paginar($event: any, pagina: number){
    $event.preventDefault();
    this.pagina = pagina;
    this.currentPage = pagina;
    this.carregarProdutos();
  }

  numeroPaginas() {
    return this.produtoService.numeroPaginas(this.filtro);
  }

  obterPaginas() {
    return [...Array(this.numeroPaginas()).keys()];
  }


}

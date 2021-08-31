import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrinho } from 'src/app/models/carrinho';
import { carrinho_mock } from 'src/app/models/carrinho.mock';
import { pedidos_mock } from 'src/app/models/pedido.mock';
import { Pedido } from 'src/app/models/pedidos';
import { Produto } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {
 

    constructor(private route: ActivatedRoute,
      private router: Router, public produtoService: ProdutosService) { }

    public qtd!: number;

    comprar(){
     
      this.produtoService.comprar(this.qtd);
      this.produtoService.persistir(pedidos_mock);
      
      
    }
    carrinho(){
      this.produtoService.carrinho(this.qtd);
      this.produtoService.persistirCarrinho(carrinho_mock);
    }
    
  ngOnInit(): void {
    this.produtoService.idProduto = +this.route.snapshot.params['id'];
    this.produtoService.produto = this.produtoService.produtos.find(prod => prod.id === this.produtoService.idProduto);
    console.log(this.produtoService.produto); 
  }

}



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrinho } from 'src/app/models/carrinho';
import { carrinho_mock } from 'src/app/models/carrinho.mock';
import { pedidos_mock } from 'src/app/models/pedido.mock';
import { Pedido } from 'src/app/models/pedidos';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { DescricaoComponent } from '../descricao/descricao.component';
 
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  descricao: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private produtoService:ProdutosService) { }
    
   
    carrinhos: Carrinho[] = carrinho_mock;
    carrinho: Carrinho[] = [];
    
    private carregarCarrinho(){
      this.carrinho = this.produtoService.listarTodosCarrinho();
    }

    comprar(){
      let i = 0;
      while(i < this.carrinhos.length){
      this.produtoService.numeroCompra = this.produtoService.numeroCompra + 1;
      pedidos_mock.push(new Pedido(this.produtoService.numeroCompra, this.carrinhos[i].preco, this.carrinhos[i].nome, this.carrinhos[i].quantidade));
      this.produtoService.persistir(pedidos_mock);
      i += 1;
      }
      this.limpar();
    }
    
    limpar(){
      this.produtoService.limparCarrinho();
      this.carregarCarrinho();
    }

  ngOnInit(): void {
    this.carregarCarrinho();    
  }

}

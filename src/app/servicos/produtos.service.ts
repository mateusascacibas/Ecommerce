import { Injectable } from '@angular/core';
import { Produto } from '../models/produtos';
import { Carrinho } from '../models/carrinho';
import { Pedido } from '../models/pedidos';
import { pedidos_mock } from '../models/pedido.mock';
import { carrinho_mock } from '../models/carrinho.mock';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  produtos = [
    new Produto(1, "Chuteira Nike", "Com a Chuteira de Futsal Nike Beco 2, os craques do futebol de salão vão surpreender os adversários com total domínio do jogo. Resistente e confortável, essa chuteira de sação oferece ótima tração nas quadras e estabilidade superior, graças a camada de EVA na entressola. Marque golaços com a sua Chuteira da Nike Beco 2 Futsal!", 200, "chuteira.jpg"),
    new Produto(2, "Air Jordan", "Defende sua ousadia com um estilo de jogo rápido e agressivo e seus números que o colocam entre os melhores da liga. O seu novo Jordan One Take II incorpora seu vigor e sua velocidade. As cores, texturas e linhas de design lembram a personalidade de Russ dentro e fora da quadra.", 100, "Jordan.jpg"),
    new Produto(3, "Air Force", "O brilho perdura no Nike Air Force 1 '07, o tênis original que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar.", 50, "AirForce.jpg"),
    new Produto(4, "Air Max", "Com o mesmo design ondulado do original inspirado em trens-bala japoneses, o Nike Air Max permite que você aumente a velocidade do seu estilo. Com a revolucionária unidade Air de comprimento total da Nike, que abala as estruturas do mundo da corrida e adiciona cores novas e detalhes nítidos, ele permite que você corra com conforto de primeira classe.", 150, 'AirMax.jpg'),
    new Produto(5, "Nike Blazer Mid '77", "O Nike Blazer Mid '77 Infinite dá continuidade ao legado do clássico ícone do basquete que se tornou popular nas ruas. Os detalhes em borracha durável na ponta, no calcanhar e na lateral permitem que você vá para onde quiser, dia após dia, enquanto o logotipo Swoosh distorcido e costurado confere um toque moderno.", 135, 'Blazer.jpg'),
    new Produto(6, "Supreme", "Blusa de moletom manga longa com bolso canguru e capuz com cordão de ajuste", 80, 'supreme.png'),
    new Produto(7, "Flash", "Blusa de moletom do Flash, com capuz canguru", 90, 'flash.png'),
    new Produto(8, "Jordan", "Moletom Jordan cinza, manga longa, com cordão de ajuste", 100, 'jordanBlusa.jpeg'),
    new Produto(9, "Bomber", "Moletom Bomber vermelho, manga longa", 110, 'bomber.jpeg'),
    new Produto(10, "Canguru", "Conjunto Moletom Canguru Rosa Flanelado", 87, 'canguru.jpeg')
  ]
    
    numeroCompra: string = '';
    public qtdProdutos = 0;
    NomeCompra = "";
    PrecoCompra = 0;
    QuantidadeCompra = 1;
    idProduto: number = 0;
    produto: any;
    prodCompra: any;
    public qtd: number | undefined;
    private readonly total_elem_pag = 5;

    listarPaginado(pagina = 0): Produto[] {
      let produto = this.produtos;
      //Paginação
      const indice = pagina * this.total_elem_pag;
      produto = produto.slice(indice,indice + this.total_elem_pag);
      return produto;
   }

   numeroPaginas(filtro: string){
    const tarefas = this.filtrar(this.listarTodosProdutos(), filtro);
    return Math.ceil(tarefas.length / this.total_elem_pag);
  }

  private filtrar(produtos: Produto[], filtro: string): Produto[] {
    if (filtro === '') {
      return produtos;
    }
    return produtos.filter((tarefa: Produto) =>
        tarefa.nome.toLowerCase().startsWith(filtro.toLowerCase()));
  }

  listarTodosProdutos(): Produto[]{
    return this.produtos;
  }

  listarTodos(): Pedido[] {
    return JSON.parse(localStorage['pedidos'] || '[]');
  }
  listarTodosCarrinho(): Pedido[] {
    return JSON.parse(localStorage['carrinho'] || '[]');
  }

  persistir(pedidos: Pedido[]){
   
    localStorage.setItem('pedidos',JSON.stringify(pedidos))
  
  }
  
  persistirCarrinho(carrinho: Carrinho[]){
    localStorage.setItem('carrinho',JSON.stringify(carrinho))
  }

  limparCarrinho(){
      localStorage['carrinho'] = [''];
      carrinho_mock.length = 0;
  }

  comprar(qtd: number){
      this.numeroCompra = new Date().getTime().toString();
      this.prodCompra = this.produtos.find(prod => prod.id === this.idProduto);
      this.NomeCompra = this.prodCompra.nome;
      if( qtd == undefined){
        this.QuantidadeCompra = 1;
      }else{
        this.QuantidadeCompra = Number(qtd);
      }
      this.PrecoCompra = this.prodCompra.preco * this.QuantidadeCompra;
      pedidos_mock.push(new Pedido(this.numeroCompra, this.PrecoCompra, this.NomeCompra, this.QuantidadeCompra));
     
  }

  carrinho(qtd: number){
      this.qtdProdutos += 1;
      this.prodCompra = this.produtos.find(prod => prod.id === this.idProduto);
      this.NomeCompra = this.prodCompra.nome;
      if(qtd === undefined){
        this.QuantidadeCompra = 1;
      }else{
        this.QuantidadeCompra = Number(qtd);
      }
      this.PrecoCompra = this.prodCompra.preco * this.QuantidadeCompra;
      carrinho_mock.push(new Carrinho(this.NomeCompra,this.PrecoCompra, this.QuantidadeCompra));
  }
  
  criarSenha(){
    if(!localStorage['token']){
      const adm = window.prompt("Cadastre a senha do usuario: ");
      localStorage['token'] = JSON.stringify(adm);
    }
  }
}

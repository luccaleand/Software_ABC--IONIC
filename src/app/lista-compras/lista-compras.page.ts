import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { produtos } from '../model/produtos.model';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
})
export class ListaComprasPage implements OnInit {


  meusprodutos: produtos[] = [];
  btnButtom = "Deletar";
  constructor(private http: HttpClient) { }

  /* Método responsavel por carregar tudo dentro dele na inicialização do componente */
  ngOnInit(): void {
    this.http.get<produtos[]>('http://localhost:3000/produtos/').subscribe(caixinha => this.meusprodutos = caixinha);
  }

  /* Método de excluir chamado pelo botão excluir */
  deletar(id: any) {
    this.http.delete('http://localhost:3000/produtos/' + id).subscribe();
    setTimeout(this.refresh, 2000)
  }
  refresh() {
    /* Funçao JS - Atualiza a pagina */
    location.reload();
  }
}

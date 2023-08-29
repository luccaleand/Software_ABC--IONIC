import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { produtos } from '../model/produtos.model';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {
  titulo = "Adicionar de lista de compras"

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  meusProdutos:produtos[] = [];
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  nameButton = "Enviar";




  adicionar(form:any){
    this.http.post('http://localhost:3000/produtos/', form.value, this.httpOptions).subscribe();
    setTimeout(this.refresh, 1000) 
  }

  refresh(){
    // Função JS - Atualiza a página
    location.reload();
  }
}

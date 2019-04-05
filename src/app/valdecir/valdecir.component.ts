import { Component } from '@angular/core';
import { Lista } from '../entidades/lista';
import { ServicoLista } from '../servico/servico.lista';

@Component({
  selector: 'vetor-component'
  ,templateUrl: 'valdecir.component.html'
  ,styleUrls: ['valdecir.component.html']
})
export class ValdecirComponent{
  lista: Lista = new Lista();
  listaTelefonica = this.servico.listaTelefonica;

  constructor(private servico : ServicoLista){
  }

  adicionar() : void {
    this.servico.adicionar(this.lista);
    this.lista = new Lista();
  }

  excluir(i:number) : void {
    this.servico.excluir(i);
  }

  alterar(i:number) : void{
    this.servico.alterar(i);
  }

  pegarLista(i:number) : void {
    this.lista = this.listaTelefonica[i];
  }




}

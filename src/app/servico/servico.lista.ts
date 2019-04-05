import { Lista } from '../entidades/lista';
import { Injectable } from '@angular/core';


@Injectable()
export class ServicoLista{

  listaTelefonica = new Array<Lista>();


  adicionar(lista : Lista) : void {
    this.listaTelefonica.push(lista);

  }

  excluir(i:number) : void {
    this.listaTelefonica.splice(i,1);
  }

  alterar(i:number) : void{

    this.listaTelefonica.splice(i,1);
  }
}



export class Lista{
  private nome : string;
  private numero : number;

  getNumero():number {
    return this.numero;
  }

  setNumero(numero:number) : void{
    this.numero = numero;
  }


  getNome():string {
    return this.nome;
  }

  setNome(nome:string) : void{
    this.nome = nome;
  }


}

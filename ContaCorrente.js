import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;  //atributo estático da conta. 
constructor(cliente, agencia){
    super(0,cliente,agencia);
    ContaCorrente.numeroDeContas +=1;
}

}
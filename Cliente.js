export class Cliente {

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {       //construtores
        this.nome = nome;
        this._cpf = cpf;

    }
}

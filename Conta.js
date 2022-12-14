export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }                                              ///acessores GET e SET
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo
    }

    sacar(valor) {

        let taxa = 1
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    } //comportamento

    depositar(valor) {
        if (valor <= 0) {
            return
        }
        this._saldo += valor;

    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);   //composição de classes
        conta.depositar(valorSacado)
    }
}


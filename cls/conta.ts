

import { ValorInvalidoError } from "./excecoes"

export class Conta {
    private _number: string
    private _balance: number

    constructor(number: string, balance: number) {
        this._number = number
        //q10
        this._balance = 0
        this.depositar(balance)
    }

    get number(): string {
        return this._number
    }

    get balance(): number {
        return this._balance
    }

    set balance(value: number) {
        this._balance = value
    }

    depositar(value: number): void {
        this._balance += value
    }

    transferir(value: number): void {
        //q10
        if (value <= 0) {
            throw new ValorInvalidoError("VALOR INVÁLIDO")
        }
        this._balance -= value
    }
}

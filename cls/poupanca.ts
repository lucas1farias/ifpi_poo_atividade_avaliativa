

import { Conta } from "./conta"

export class Poupanca extends Conta {
    private _feesTax: number

    constructor(number: string, balance: number) {
        super(number, balance)
        this._feesTax = 0.5
    }

    getFessTax() {
        return this._feesTax
    }

    store(value: number) {
        this.balance = this.balance + value
    }

    renderJuros(): void {
        let profit = this.balance * (this._feesTax / 100)
        this.store(profit);
    }
}

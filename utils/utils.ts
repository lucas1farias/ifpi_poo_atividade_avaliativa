

import { Banco } from "../cls/banco"
import { Conta } from "../cls/conta"
import { Poupanca } from "../cls/poupanca"
import prompt from "prompt-sync"

const entrada = prompt()
export const accounts: Conta[] = []
export const bank: Banco = new Banco(accounts)

export const pessoaQ3: Conta = new Conta("227", 10)
export const mariazinha: Conta = new Conta("1", 10)
export const meriazinha: Poupanca = new Poupanca("2", 10)
export const miriazinha: Conta = new Conta("1", 10)
export const moriazinha: Conta = new Conta("3", 10)

bank.inserir(mariazinha)
bank.inserir(meriazinha)

export const value = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
}

export const thread = (symbol: string, loopTurns: number, sentence: string) => {
    let thread: string = ""
    for (let i = 0; i < loopTurns; i++) {
        thread += symbol
    }
    return thread + "o " + sentence
}

export const warning = (sentence: string="PROX: ENTER") => {
    return entrada(thread("-", value(20, 51), sentence))
}

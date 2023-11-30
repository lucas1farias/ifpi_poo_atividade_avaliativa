

import prompt from "prompt-sync"
import { Banco } from "../cls/banco"
import { Conta } from "../cls/conta"
import * as self from "../cls/excecoes"

function requisitarEntrada(sentence: string, empty: boolean=false): string {
    console.log(sentence)
    let data: string
    empty ? data = input("") : data = input(">>> ")
    return data
}

function percorrerString(sentence: string) {
    const stringArray: string[] = []
    for (let i = 0; i < sentence.length; i++) {
        stringArray.push(sentence[i])
    }
    return stringArray
}

function entradaNaoVazia(inputData: string) {
    return inputData !== ""
}

function entradaSemLetras(inputData: string) {
    return /^\d+$/.test(inputData) 
}

function entradaSemEspacos(inputData: string) {
    return !percorrerString(inputData).includes(" ") 
}

function entradaNaoNegativa(inputData: string) {
    return Number(inputData) > 0
}

function verificarEntrada(inputData: string): void {
    const A: boolean = entradaNaoVazia(inputData) 
    const B: boolean = entradaSemLetras(inputData) 
    const C: boolean = entradaSemEspacos(inputData)
        
    if (!A || !B || !C) {
        throw new self.NumeroContaInvalidoError("")
    }
} 

function verificarEntradaV2(inputData: string): number {
    const A: boolean = entradaNaoVazia(inputData)  
    const C: boolean = entradaSemEspacos(inputData)
    const D: boolean = entradaNaoNegativa(inputData)
        
    if (!A || !C || D) {
        return 1
    }
    return 0
} 

// TEMPORÁRIA
function todo() {
    bank.inserir(new Conta("999", 50))
    bank.inserir(new Conta("998", 50))
}

function excecaoContaInexistente(err: any) {
    if (err instanceof self.ContaInexistenteError) {
        console.log("Erro: Conta inexistente...")
    }
}

function excecaoNumeroInvalido(err: any) {
    if (err instanceof self.NumeroContaInvalidoError) {
        console.log("Erro: Número de conta inválido...")
    }
}

function excecaoBancoVazio(err: any) {
    if (err instanceof self.BancoVazioError) {
        console.log("Erro: Banco sem dados (vazio)...")
    }
}

function excecaoSaldoInsuficiente(err: any) {
    if (err instanceof self.FundosInsuficientesError) {
        console.log("Erro: saldo insuficiente...")
    }
}

function excecaoValorInvalido(err: any) {
    if (err instanceof self.ValorInvalidoError) {
        console.log("Erro: Valor de saque inválido...")
    }
}

function excecaoTransferenciaEspelho(err: any) {
    if (err instanceof self.TransferenciaEspelhoError) {
        console.log("Erro: Proibido transferir de uma conta para ela mesma...")
    }
}

function excecaoSaldoInicialInvalido(err: any) {
    if (err instanceof self.SaldoInicialInvalidoError) {
        console.log("Erro: Valor do saldo inicial inválido...")
    }
}

function menu(): void {
    const greetings: string = '\n===== Banco App ====='
    const operations: string = `\n${"Operações".toUpperCase()}:
    1. Cadastrar conta
    2. Consultar
    3. Sacar
    4. Depositar
    5. Excluir
    6. Transferir
    7. Ver contas
    0. Sair`
    console.log(greetings + operations)
}

let input = prompt()
let accounts: Conta[] = []
let bank: Banco = new Banco(accounts)
let instruction: string = ""
// todo()

do {
    try {
        console.clear()
        menu()
        instruction = input("Digite o valor da operação >>> ")
        
        switch (instruction) {
            case "1":
                inserir()
                break
            case "2":
                consultar()
                break
            case "3":
                sacar()
                break
            case "4":
                depositar()
                break
            case "5":
                excluir()
                break
            case "6":
                transferir()
                break
            case "7":
                contas()
                break
        }
        
        input("\nPressione a tecla ENTER\n")
    } 

    catch(err: any) {
        if (err instanceof self.AplicacaoError) {
            console.log(err.message)
        }
        if (err instanceof Error) {
            console.log("Erro de sistema: contate o admin.");
        }
    }
    
} while (instruction != "0")
console.log("\n===== AVISO =====\nAplicação encerrada!")
   
function contas(): void {
    try {
        if (bank.accounts.length == 0) {
            throw new self.BancoVazioError("")  
        } else {
            console.log("[")
            for (let i = 0; i < bank.accounts.length; i++) {
                console.log(`    num: ${bank.accounts[i].number}, saldo: ${bank.accounts[i].balance},`)
            }
            console.log("]")
        }
    }
    catch(err: any) {
        excecaoBancoVazio(err)
    }
}

function inserir(): void {
    let accountNumber: string = ""
    let startingBalance: string = ""

    try {
        accountNumber = requisitarEntrada("Digite o número da conta")
        verificarEntrada(accountNumber)
        startingBalance = requisitarEntrada("Digite o saldo inicial")
        
        // console.log(entradaNaoVazia(startingBalance))
        // console.log(entradaSemEspacos(startingBalance))
        // console.log(entradaNaoNegativa(startingBalance))
        // console.log(verificarEntradaV2(startingBalance))
        
        if (Number(startingBalance) <= 0 || verificarEntradaV2(startingBalance) === 0) {
            throw new self.SaldoInicialInvalidoError("")
        }

        const newAccount: Conta = new Conta(accountNumber, Number(startingBalance))
        bank.inserir(newAccount)
    }
    catch(err: any) {
        excecaoNumeroInvalido(err)
        excecaoSaldoInicialInvalido(err)
    }
}

function consultar(): void {
    let accountNumber: string = ""
    
    try {
        accountNumber = requisitarEntrada("Digite o número da conta")
        verificarEntrada(accountNumber)
        // Consultar se a entrada for apropriada
        const account: Conta = bank.consultar(accountNumber)
        const accountData: string = `
        ===== CONTA =====
        número: ${account.number}
        saldo: R$ ${account.balance}`
        console.log(accountData)
    }
    catch(err: any) {
        excecaoNumeroInvalido(err)
        excecaoContaInexistente(err)
    }
}

function sacar(): void {
    let accountNumber: string = ""
    let value: string = ""
    
    try {
        accountNumber = requisitarEntrada("Digite o número da conta")
        verificarEntrada(accountNumber)
        const account: Conta = bank.consultar(accountNumber)
        value = requisitarEntrada("Digite o valor a ser extraido")
        bank.sacar(accountNumber, Number(value))
    }
    catch(err: any) {
        excecaoNumeroInvalido(err)    // entrada de número da conta inválido
        excecaoContaInexistente(err)  // conta não achada
        excecaoSaldoInsuficiente(err) // valor do saque > saldo
        excecaoValorInvalido(err)     // valor <= 0
    }
}

function depositar(): void {
    let accountNumber: string = ""
    let value: string = ""
    
    try {
        accountNumber = requisitarEntrada("Digite o número da conta")
        verificarEntrada(accountNumber)
        const account: Conta = bank.consultar(accountNumber)
        value = requisitarEntrada("Digite o valor a ser inserido ao saldo")
        bank.depositar(accountNumber, Number(value))
    }
    catch(err: any) {
        excecaoNumeroInvalido(err)    // entrada de número da conta inválido
        excecaoContaInexistente(err)  // conta não achada
        excecaoSaldoInsuficiente(err) // valor do saque > saldo
        excecaoValorInvalido(err)     // valor <= 0
    }
}

function excluir(): void {
    let accountNumber: string = ""
    try {
        accountNumber = requisitarEntrada("Digite o número da conta")
        verificarEntrada(accountNumber)
        bank.excluir(accountNumber)
    }
    catch(err: any) {
        excecaoNumeroInvalido(err)
        excecaoContaInexistente(err)
    }
}

function transferir(): void {
    let accountNumberA: string = ""
    let accountNumberB: string = ""
    let value: string = ""
    try {
        accountNumberA = requisitarEntrada("Digite o número da conta a ser debitada")
        verificarEntrada(accountNumberA)
        const accountA: Conta = bank.consultar(accountNumberA)

        accountNumberB = requisitarEntrada("Digite o número da conta a ser bonificada")
        verificarEntrada(accountNumberB)
        const accountB: Conta = bank.consultar(accountNumberB)
        
        value = requisitarEntrada("Digite o valor a ser transferido")
        bank.transferir(accountB.number, accountA.number, Number(value))
    }
    catch(err: any) {
        excecaoNumeroInvalido(err)
        excecaoTransferenciaEspelho(err)
        excecaoSaldoInsuficiente(err)
        excecaoValorInvalido(err)
    }
}

/*

*/

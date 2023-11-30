

/*
Lance um erro no construtor e nos métodos sacar e depositar 
para que, caso o valor passado seja menor que zero uma exceção seja lançada. 
Reexecute os testes da questão anterior com valores que “passem” pelo saldo insuficiente, 
e teste também a chamada dos métodos passando como parâmetro valores < 0
*/

/* ===== COMO EXECUTAR ESSE SCRIPT? ===== 
    -> cd questoes => npx ts-node q6.ts 
   
    ===== COMO CONSULTAR AS MUDANÇAS? =====
    -> caminho: cls\banco.ts 
    -> [ctrl + F] procurar por "//q6" (sem as aspas)
*/

import * as self from "../utils/utils"
import prompt from "prompt-sync"

const entrada = prompt()
let opcao: string
do {
    console.log("Escolha:\n0. SAIR\n1. erro 1\n2. erro 2\n3. erro 3")
    opcao = entrada(" >>>")
    if(opcao === "1") {self.bank.sacar(self.mariazinha.number, -5)}
    if(opcao === "2") {self.bank.depositar(self.mariazinha.number, -5)}        
    if(opcao === "3") {self.bank.transferir(self.mariazinha.number, self.meriazinha.number, 100)}
} while (opcao !== "0")

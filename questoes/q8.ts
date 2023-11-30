

/*
Implemente na classe Banco os métodos consultar e consultarPorIndice para que,
caso a conta procurada não seja encontrada, a exceção ContaInexistente seja
lançada.
*/

/* ===== COMO EXECUTAR ESSE SCRIPT? ===== 
    -> cd questoes => npx ts-node q8.ts 
   
    ===== COMO CONSULTAR AS MUDANÇAS? =====
    -> caminho: cls\banco.ts 
    -> [ctrl + F] procurar por "//q8" (sem as aspas)
*/

import * as self from "../utils/utils"
import { Conta } from "../cls/conta"
import prompt from "prompt-sync"
    
const pessoaQ8A: Conta = new Conta("1111", 10)
const pessoaQ8B: Conta = new Conta("2222", 5)
const pessoaQ8C: Conta = new Conta("3333", 5)

self.bank.inserir(pessoaQ8A)
self.bank.inserir(pessoaQ8B)

let entrada = prompt()
let opcao: string

do {
    console.clear()
    console.log("Qual função deseja usar?\n0. SAIR\n1. consultar\n2. consultarPorIndice")
    opcao = entrada(">>> ")
    
    if (opcao == "1") {
        console.log(self.bank.consultar(pessoaQ8A.number))
        entrada("\n---o PRÓXIMO (ENTER)\n")
        console.log(self.bank.consultar(pessoaQ8B.number))
        entrada("\n---o PRÓXIMO (ENTER)\n")
        console.log("EXCEÇÃO ENCONTARDA")
        console.log(self.bank.consultar(pessoaQ8C.number))
    }
    else if (opcao == "2") {
        console.log(self.bank.consultarPorIndice(0))
        entrada("\n---o PRÓXIMO (ENTER)\n")
        console.log(self.bank.consultarPorIndice(1))
        entrada("\n---o PRÓXIMO (ENTER)\n")
        console.log("EXCEÇÃO ENCONTARDA")
        console.log(self.bank.consultarPorIndice(7))
    }

} while (opcao !== "0" && opcao !== "1" && opcao !== "2")

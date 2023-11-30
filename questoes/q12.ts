

/*
Crie uma exceção chamada PoupancaInvalidaError que herda de AplicacaoError.
Altere então o método render juros da classe Banco para que caso a conta não
seja uma poupança, a exceção criada seja lançada.
*/

/* ===== COMO CONSULTAR AS MUDANÇAS? =====
   -> caminho: cls\banco.ts
   -> caminho: cls\excecoes.ts
   -> [ctrl + F] procurar por "//q12" (sem as aspas)
*/

import * as self from "../utils/utils"
import prompt from "prompt-sync"

let entrada = prompt()
let opcao: string

do {
    console.clear()
console.log("===== Escolha a opção =====\n0. SAIR\n1. sem erro\n2. erro")
    opcao = entrada(">>> ")
    if (opcao === "1") {
        // Meriazinha é "Poupanca": ela passa 
        self.bank.renderJuros(self.meriazinha.number)
        self.warning("EXCEÇÃO NÃO ENGATILHADA (aperte ENTER...)")
    } 
    else if (opcao === "2") {
        self.warning("EXCEÇÃO ENGATILHADA (aperte ENTER...)")
        // Mariazinha é "Conta": não passa
        self.bank.renderJuros(self.mariazinha.number)
    }
}
while (opcao !== "0")

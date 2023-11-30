

/*
Crie uma validação para não cadastrar mais de uma conta com o mesmo número.
Para isso, chame o método "consultar" no método "inserir" da classe banco. 
Apenas se a exceção do método "consultar" for lançada, você deve incluir a conta. 
Para isso, consulte a conta dentro de um try e o faça a inclusão no catch
*/

/* ===== COMO EXECUTAR ESSE SCRIPT? ===== 
   -> cd questoes => npx ts-node q13.ts  

   ===== COMO CONSULTAR AS MUDANÇAS? =====
   -> caminho: cls\banco.ts
   -> caminho: cls\excecoes.ts
   -> [ctrl + F] procurar por "//q13" (sem as aspas)
*/

import * as self from "../utils/utils"
import { Conta } from "../cls/conta"
import prompt from "prompt-sync"

let entrada = prompt()
let opcao: string



do {
    console.clear()
console.log("===== Escolha a opção =====\n0. SAIR\n1. sem erro\n2. erro")
    opcao = entrada(">>> ")
    
    if (opcao === "1") {
        // Moriazinha possui "number" diferente de todos as contas: ela passa
        self.bank.inserir(self.moriazinha)
        self.warning("EXCEÇÃO NÃO ENGATILHADA (aperte ENTER...)")
    } 
    else if (opcao === "2") {
        console.log("Qtd. de contas: ", self.bank.accounts.length)
        // "number=1" já existe: não passa
        const pessoaQ13: Conta = new Conta("1", 10)
        self.bank.inserir(pessoaQ13)
        self.warning("EXCEÇÃO DETECTADA (aperte ENTER)...")
        console.log("Qtd. de contas: ", self.bank.accounts.length)
    }
}
while (opcao !== "0")

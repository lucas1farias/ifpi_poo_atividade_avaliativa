

/*
Você percebeu que o código que valida se o valor é menor ou igual a zero se repete nos métodos sacar e depositar? 
Refatore o código criando um método privado chamado validarValor 
onde um valor é passado como parâmetro e caso o mesmo seja menor ou igual a zero, seja lançada uma exceção. 
Altere também os métodos sacar e depositar para chamar esse método de validação 
em vez de cada um lançar a sua própria exceção, evitando assim a duplicação de código. 
*/

/* ===== COMO EXECUTAR ESSE SCRIPT? ===== 
    -> cd questoes => npx ts-node q11.ts 

   ===== COMO CONSULTAR AS MUDANÇAS? =====
   -> caminho: cls\banco.ts 
   -> [ctrl + F] procurar por "//q11" (sem as aspas)

   ===== OBS ======
   -> A função sendo privada, eu criei outra função que a chama: "validarValor_"
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
        entrada("EXCEÇÃO NÃO ENGATILHADA")
        self.bank.validarValor_(2)
    } else if (opcao === "2") {
        entrada(self.thread("-", self.value(20, 51), "EXCEÇÃO ENGATILHADA (aperte ENTER...)"))
        self.bank.validarValor_(0)
    }
}
while (opcao !== "0")



/*
1. Crie uma exceção chamada ValorInvalidoError que herda de AplicacaoError 
2. e altere a classe Conta para que ao receber um crédito/depósito
2. caso o valor seja menor ou igual a zero, seja lançada a exceção ValorInvalidoError. 
3. Altere também o construtor da classe Conta para que o saldo inicial seja atribuído utilizando o método depositar.  
*/

/* ===== COMO EXECUTAR ESSE SCRIPT? ===== 
    -> cd questoes => npx ts-node q10.ts 
   
    ===== COMO CONSULTAR AS MUDANÇAS? =====
    -> caminho: cls\excecoes.ts
    -> caminho: cls\banco.ts 
    -> caminho: cls\conta.ts 
    -> [ctrl + F] procurar por "//q10" (sem as aspas)

    ===== OBS =====
    O método "depositar" não recebeu a exceção em "Conta"
    O motivo é que está dando algum erro no construtor que impede de depositar o saldo inicial diretamente
    Tentei mudar isso, mas não consegui, portanto o tratamento dessa exceção ficou para ser feita no algoritmo
    O tratamento foi feito na função "inserir" do algoritmo em: (app/app.ts)
*/

import * as self from "../utils/utils"
import prompt from "prompt-sync"

let entrada = prompt()
let opcao: string

do {
    console.log("===== Escolha a opção =====\n0. SAIR\n1. erro A\n2. erro B\n3. sem erro")
    opcao = entrada(">>> ")

    if (opcao === "1") {
        entrada("ERRO A...")
        console.log(self.bank.transferir(self.mariazinha.number, self.meriazinha.number, -1))
    }
    else if (opcao === "2") {
        entrada("ERRO B...")
        console.log(self.bank.depositar(self.mariazinha.number, 0))
    }
    else {
        entrada("SEM ERRO...")
        console.log(self.bank.depositar(self.mariazinha.number, 1))
    }
} while (opcao !== "0")

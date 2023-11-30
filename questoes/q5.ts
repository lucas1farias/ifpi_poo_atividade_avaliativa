

/*
Instancie uma classe banco e crie duas contas. 
Adicione-as à instancia do banco.
Chame o método transferir novamente passando um valor que lance a exceção na classe conta. 

Você considera que o lançamento da exceção foi “propagado” para o método:
    . conta.transferir(), banco.transferir() e o método transferir do script app?

Como você avalia a confiabilidade dessa implementação?
*/

/* ===== COMO EXECUTAR ESSE SCRIPT? ===== 
    -> cd questoes => npx ts-node q5.ts
*/

import * as self from "../utils/utils"

console.log("EXCEÇÃO ENCONTRADA...")
self.warning()

// A função em "Conta.transferir" se propaga em "Banco.transferir"
self.bank.transferir(self.mariazinha.number, self.meriazinha.number, 0)

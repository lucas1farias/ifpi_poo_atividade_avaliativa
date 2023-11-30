

/*
Crie duas contas e teste o método transferir de modo que a conta a ser debitada
não possua saldo suficiente. Explique o que ocorreu.
*/

/* ===== COMO EXECUTAR ESSE SCRIPT? ===== 
    -> cd questoes => npx ts-node q4.ts
    
   ===== MUDANÇAS =====
   -> caminho: cls\banco.ts 
   -> [ctrl + F] procurar por "//q4" (sem as aspas)
*/

import * as self from "../utils/utils"

console.log("EXCEÇÃO ENCONTRADA...")
self.warning()
/* 
===== EXPLICAÇÃO =====
"Meriazinha" não têm saldo suficiente p/ transferir p/ "Mariazinha"
Se não for implementada uma exceção, não haverá reclamações, mas o provedor ficará com saldo negativo
*/
self.bank.transferir(self.mariazinha.number, self.meriazinha.number, 11)



/*
Implemente como nos slides o lançamento da exceção no método sacar 
e realize um teste para saques que deixariam o saldo negativo.
*/

/* TUTORIAL
CAMINHO:
    . cls -> banco.ts
    . ctrl + F -> procurar por ocorrências "// q3" (sem as aspas)
*/

import * as self from "../utils/utils"

self.bank.inserir(self.pessoaQ3)
self.warning("EXCEÇÃO ENCONTRADA...")
self.bank.sacar(self.pessoaQ3.number, 11)

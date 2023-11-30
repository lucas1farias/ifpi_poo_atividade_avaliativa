

import { Conta } from "./conta"
import { Poupanca } from "./poupanca"
import {
    ContaInexistenteError, ContaRepetidaError, FundosInsuficientesError, PoupancaInvalidaError, TransferenciaEspelhoError, ValorInvalidoError
} from "./excecoes"

export class Banco {
    accounts: Conta[]
    
    constructor(accounts: Conta[]) {
        this.accounts = accounts
    }
    
    //q13
    inserir(account: Conta): void {
        try {
            // Se for "null" a exceção "ContaInexistenteError" é ativada. A conta não existe e pode ser add...
            const newAccount = this.consultar(account.number)
            
            // Contanto que os seus números não sejam iguais
            if (newAccount.number === account.number) {
                throw new ContaRepetidaError("")
            }
        }
        catch(err: any) {
            // Adiciona, pois os números não são iguais
            if (err instanceof ContaInexistenteError) {
                this.accounts.push(account)
            } 
            // Não adiciona, números iguais
            else if (err instanceof ContaRepetidaError) {
                console.log("Erro: CONTA REPETIDA")
            }
        }
    }

    alter(account: Conta): void {

    }
    
    //q8
    consultar(i: string): Conta {
        for (let j = 0; j < this.accounts.length; j++) {
            if (i === this.accounts[j].number) {
                return this.accounts[j]
            }
        }
        let client = null
        
        if (client == null) {
            throw new ContaInexistenteError("Conta inexistente!")
        }
        
        return client
    }
    
    //q8
    consultarPorIndice(i: number): Conta {
        if (i >= this.accounts.length) {
            throw new ContaInexistenteError("Conta inexistente!")
        } else {
            return this.accounts[i]
        }
    }

    excluir(i: string): void {
        const accountExists = this.consultar(i)
        let found: number = 0;
        
        this.accounts.forEach((account, pos) => {
            if (account.number === i) {
                this.accounts.splice(pos, 1)
                found++
            }
        })
        if (found === 0) {
            throw new ContaInexistenteError("")
        }
    }

    //q9
    depositar(i: string, value: number): void {
        const accountExists = this.consultar(i) 
        
        /*
        //q6 
        if (value < 0) {
            throw new ValorInvalidoError("Valor negativo detectado! (sacar)")
        }
        */
        
        //q11 (substituiu q6 acima)
        this.validarValor(value);
        (<Conta> accountExists).depositar(value)
    }
    
    //q9
    sacar(i: string, value: number): void {
        // Pode lançar exceção, mas não lançando, ainda precisa tratar o valor do saque
        const accountExists = this.consultar(i)
        
        //q3
        if (accountExists.balance < value) {
            throw new FundosInsuficientesError('FUNDOS INSUFICIENTES')
        }
        
        /* 
        //q6 
        if (value < 0) {
            throw new ValorInvalidoError("Valor negativo detectado! (sacar)")
        }
        */

        //q11 (substituiu q6 acima)
        this.validarValor(value)
        
        accountExists.balance -= value;
    }
    
    //q9
    transferir(idFromBenefited: string, idFromDebited: string, value: number): void {
        let receiver = this.consultar(idFromBenefited)
        let provider = this.consultar(idFromDebited)
        
        if (receiver.number == provider.number) {
            throw new TransferenciaEspelhoError("TRANSFERÊNCIA ESPELHO")
        } 
        else {
            if (provider.balance >= value) {
                (<Conta> provider).transferir(value)
                receiver.balance += value
            }
            //q4
            else {
                throw new FundosInsuficientesError("FUNDOS INSUFICIENTES")
            }
        }
    }

    //q9
    renderJuros(number: string): number {
        const accountExists = this.consultar(number)

        if (accountExists instanceof Poupanca) {     
            (<Poupanca> accountExists).renderJuros()
            return 1
        }
        //q12
        else {
            throw new PoupancaInvalidaError("CONTA NÃO É POUPANÇA")
        }
        return 0
    }
    
    //q11
    validarValor_(value: number): void {
        return this.validarValor(value)
    }
    
    //q11
    private validarValor(value: number) {
        if (value <= 0) {
            throw new ValorInvalidoError("VALOR INVÁLIDO")
        }
    }
}

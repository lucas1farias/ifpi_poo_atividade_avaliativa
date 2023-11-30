

//q7 
export class AplicacaoError extends Error {
    constructor(message: string) {
        super(message);
    }
}

//q7
export class ContaInexistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

//q7
export class SaldoInsuficienteError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
} 
    
export class FundosInsuficientesError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

export class SystemError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

//q6 //q10
export class ValorInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
}

export class TransferenciaEspelhoError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
} 

//q12
export class PoupancaInvalidaError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
} 

//q13
export class ContaRepetidaError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
} 

//q15
export class BancoVazioError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
} 

//q15
export class NumeroContaInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
} 

//q15
export class SaldoInicialInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message);
    }
} 
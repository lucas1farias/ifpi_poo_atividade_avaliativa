

/*
Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com
códigos seus ou pesquisados na internet.
*/

// Desconsiderar operação
function valor(max: number, min: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

function addQualitativo(alunoNota: number) {
    const q: number[] = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    const add: number = valor(q.length - 1, 0)
    return alunoNota + q[add]
}

for (let i = 0; i < 20; i++) {
    console.log(addQualitativo(7))
}

// Exibir mensagem de erro
console.log("\n")
if (Math.random() > Math.random()) {
    console.log("O da direita é maior")
} else {
    console.log("O da esquerda é maior")
}

// Retornar um código de erro
function mesEhvalido(mes: number) {
    if (mes < 1 || mes > 12) {
        return 1
    }
    return 0
}

console.log("\n")
console.log(mesEhvalido(1))
console.log(mesEhvalido(0))
console.log(mesEhvalido(13))
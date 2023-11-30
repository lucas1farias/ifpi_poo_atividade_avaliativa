

function entradaSemLetras(inputData) {
    return /^\d+$/.test(inputData) 
}

console.log(Number("-"))
console.log(Number("-1"))
console.log(Number("a"))
console.log(entradaSemLetras("1"))


/**/

class DivisaoPorZeroError extends Error {
    constructor(message: string) {
        super(message);
    }
} 

class PalavraSemVogalError extends Error {
    constructor(message: string) {
        super(message);
    }
} 

class PalavraVaziaError extends Error {
    constructor(message: string) {
        super(message);
    }
} 

// try {
//     const a: number = 1
//     const b: number = 0
//     const c: string = "bcd"
//     const vowels: string[] = "a.e.i.o.u".split(".")
    
//     // if (a === 0 || b === 0) {
//     //     throw new DivisaoPorZeroError("")
//     // }

//     if (
//         !c.includes(vowels[0]) && 
//         !c.includes(vowels[1]) && 
//         !c.includes(vowels[2]) &&
//         !c.includes(vowels[3]) &&
//         !c.includes(vowels[4])
//         ) {
//         throw new PalavraSemVogalError("")
//     }
// }

// err.stack => quando estiver em desenvolvimento
// catch(err: any) {
//     if (err instanceof DivisaoPorZeroError) {
//         console.log("Erro: Divisão por zero.")
//         // console.log(err.stack)
//     }
//     else if (err instanceof PalavraSemVogalError) {
//         console.log("Erro: Palavra sem vogal.")
//     }
//     else if (err instanceof PalavraVaziaError) {
//         console.log("Erro: Palavra vazia.")
//     }
// }

const word: string = "1"
const box: string[] = []
for (let i = 0; i < word.length; i++) {
    box.push(word[i])
}
const test: boolean = !box.includes(" ")
const test2: boolean = /^\d+$/.test(word)
const test3: boolean = word !== ""

console.log(test3) // true (false)
console.log(test2) // true (false)
console.log(test)  // false (true)

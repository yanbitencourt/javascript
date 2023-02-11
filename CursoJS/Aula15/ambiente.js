let num = [5 , 8 , 2 , 9 , 3]
num.push(1) //Adicionar 1 no final do array
num.sort() //Por em ordem crescente
// num [3] = 1
// num.length
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) 

let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`Posição não encontrada`)
} else {
    console.log(`O valor está na posição ${pos} `)
}



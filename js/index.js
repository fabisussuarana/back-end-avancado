// Overview de javascript

// console
console.log('Texto dentro de um log')
console.error('Mensagem de erro')
console.warn('Alerta')

// variáveis
let x = 10
const MyName = 'Fabi'
console.log(MyName)


if (true) {
    let x = 20;
    console.log(x) 
    //no console o valor 20 é liberado pq o console.log 
    //está dentro do escopo local, e não do global
}

// string
const name = 'bi'
console.log(name)
console.log(typeof name)

// number
let n = 10
console.log(n)
console.log(typeof n)
n = 15
console.log(n)
console.log(typeof n)

// bool
const isOpen = true
console.log(isOpen)
console.log(typeof isOpen)

// null
const a = null
console.log(a)
console.log(typeof a)

// undefined
let nada
console.log(nada)
console.log(typeof nada)

// array
const linguagens = ['C++', 'Java', 'Python', 'JavaScript']
console.log(linguagens[1])
console.log(typeof linguagens[1])

// object literals
const user = { 
    username:'vrc',
    password: '123', 
    age:31, 
    name:'Vic'
}
console.log(user)
console.log(typeof user)

//métodos de string
const text = 'qualquer um'
console.log(text.length) //retorna o tamanho
const textToArray = text.split(' ') //tranforma em vetor, quebrando quando encontrar espaços
console.log(textToArray[0])
console.log(text.toLocaleUpperCase())
console.log(text.indexOf('abc')) //procura algo dentro de uma string
console.log(text.charAt(0))
console.log(text.slice(2, 4))

// maissobre arrays
const chars = ['AAA', 'B', 'C']
console.log(chars.length)
console.log(chars[chars.length-1])
chars[2] = 'F'
console.log(chars)
chars.pop() // pop() remove do final


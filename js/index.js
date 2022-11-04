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

// object literals

const product = {
    productName: 'Camisa',
    price: 20,
    inStock: true,
    size: ['p', 'm', 'g']
}

console.log(product.size[product.size.length-1])

console.log(product.price)

console.log(product['price'])

// desestruturação

let { productName, price } = product
console.log(price)
price = 22 // mesmo price estando dentro de uma variável const, é possível manipulá-la 
console.log(price)

const vector = [3,7,2,45,99] 
let [ v1, v2, ...outroV] = vector
console.log(outroV) // 2 45 99

let [ a1, a2 ] = vector
console.log(a1, a2) // 3 7

// JSON - JavaScript Object Notation
// XML é concorrente do JSON

// criando o objeto cachorro
const dog = {
    name: 'Scooby',
    age: 10
}
console.log(dog)

const dogJSON = JSON.stringify(dog) // transformando um objeto em JSON
console.log(dogJSON)

const dogObject = JSON.parse(dogJSON) // passando um JSON para objeto
console.log(dogObject)

const jsonErrado = '{"primeiro":"dado1","segundo":222}'

//D1

const vet = [1, 2, 3, 4, 5]

const obj = {
    n1: vet[0],
    n2: vet[1],
    n3: vet[2],
    n4: vet[3],
    n5: vet[4]
}

let { n1, n2, n3, n4, n5 } = obj

console.log(JSON.stringify({n1,n2,n3,n4,n5}))

// D2

let num1 = 4
let num2 = 2

const cal = {
    mult: num1 * num2,
    soma: num1 + num2,
    div: num1/num2,
    sub: num1 - num2
}

const result = JSON.stringify(cal)
console.log(result) 


// estruturas, métodos de listas, funções

// // Overview de javascript

// // console
// console.log('Texto dentro de um log')
// console.error('Mensagem de erro')
// console.warn('Alerta')

// // variáveis
// let x = 10
// const MyName = 'Fabi'
// console.log(MyName)


// if (true) {
//     let x = 20;
//     console.log(x) 
//     //no console o valor 20 é liberado pq o console.log 
//     //está dentro do escopo local, e não do global
// }

// // string
// const name = 'bi'
// console.log(name)
// console.log(typeof name)

// // number
// let n = 10
// console.log(n)
// console.log(typeof n)
// n = 15
// console.log(n)
// console.log(typeof n)

// // bool
// const isOpen = true
// console.log(isOpen)
// console.log(typeof isOpen)

// // null
// const a = null
// console.log(a)
// console.log(typeof a)

// // undefined
// let nada
// console.log(nada)
// console.log(typeof nada)

// // array
// const linguagens = ['C++', 'Java', 'Python', 'JavaScript']
// console.log(linguagens[1])
// console.log(typeof linguagens[1])

// // object literals
// const user = { 
//     username:'vrc',
//     password: '123', 
//     age:31, 
//     name:'Vic'
// }
// console.log(user)
// console.log(typeof user)

// //métodos de string
// const text = 'qualquer um'
// console.log(text.length) //retorna o tamanho
// const textToArray = text.split(' ') //tranforma em vetor, quebrando quando encontrar espaços
// console.log(textToArray[0])
// console.log(text.toLocaleUpperCase())
// console.log(text.indexOf('abc')) //procura algo dentro de uma string
// console.log(text.charAt(0))
// console.log(text.slice(2, 4))

// // maissobre arrays
// const chars = ['AAA', 'B', 'C']
// console.log(chars.length)
// console.log(chars[chars.length-1])
// chars[2] = 'F'
// console.log(chars)
// chars.pop() // pop() remove do final

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

const xy = 100
if(xy > 10){ // > < >= <= == !=
    console.log('Teste de entrada no if.')
}
const texto = '0'
if(texto === 0)
    console.log("Os dados são iguais.")
else if(true) 
    console.log('Segundo if - if aninhado.')
else
    console.log('Saída...') // erro na hora de pensar o código...
// operador ternário
// const resultado =  n > 20 ? true : false
// console.log(resultado)
// console.log(typeof resultado)
// repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle
let contador = 0
const lista = [1, 7, 3, 64, 2, 0]
while(contador < lista.length){
    console.log('O \'elemento\' da\n\n vez é ' + lista[contador] + '.')
    contador++ // contador = contador + 1
}
const outraLista = ['a', 'b', 'd', 'e', 'c']
for(let contador = 0; contador < outraLista.length; contador++)
    console.log(`O elemento da
    vez é ${outraLista[contador]}.`) //template literais, ou template strings


const a = 5
const b = 10
const out = ('Quinze é ' + (a+b) + '\ne não ' + (2*a+b) + '.')
console.log(out)
    
console.log(`Quinze é ${(a+b)}
e não ${(2*a+b)}.`)

// Métodos de arrays

const names = ['Victor', 'Paulo', 'Elias', 'Fabiana']
//exibindo
names.forEach(function(name){
    console.log(name)
})

// console.log(names[0] + names[1])

// Map - mapeia, ou seja, passa por cada índice do vetor
const modifiedNames = names.map(function(name){ //names.map permite modificar name
    if (name == 'Paulo') {
        return ('Paulo Sampaio')
    }
    else{
        return name
    }
})

//exibindo
modifiedNames.forEach(function(name){
    console.log(name)
})

// Filter
const numArray = [10,2,3,40,5,0].filter(function(num){
        return num < 10 //dessa forma o 0 é exibido, diferente de usar o if
})

//exibindo
numArray.forEach(function(num){
    console.log(num)
})

// reduce
const sumArray = numArray.reduce(function(num1, num2){ // para reduzir, neste caso está reduzindo os valores a um único ao somá-los
    return num1+num2
})

console.log(sumArray)

// Funções

function myFunction(name, surname){
    return `O nome completo é ${name} ${surname}`
}

console.log(myFunction('Paulo', 'Sampaio')) //Para que a função seja executada ela precisa ser chamada

// arrow function === função anônima
// function(data){ return 0; }
//(data) => 0 --> anônima

const myArrowFunction = (a, b) => a+b
console.log(myArrowFunction(5,2))

const testArrow = () => ((x=7), ()=>(x+5)) ()
console.log(testArrow)

// const namesLength = names.map(({length}) => length)  ---> outra forma de fazer
const namesLength = names.map(value => value.length) 
console.log(namesLength)

// orientação a objeto

class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productDetails(){
        return `O nome do produto é ${this.name} e o preço é ${this.price}.`
    }
    static test(){
        console.log('Testando método estático...')
    }
}
Number.parseInt('10') // convertendo a string para número

// herança

class Tenis extends Product{
    constructor(name, price, size){
        super(name, price) // usando o construtor da classepai, não necessitando copiá-la novamente
    }
    showNumber(){
        return `O tamanho do ${this.name} é ${this.size}`
    }
    productDetails(){
        return `O nome do produto é ${this.name}, no tamanho ${this.size} o preço é ${this.price}.`
    }
}

// instanciando um objeto Product
const shirt = new Product('Camisa azul', 20) 
console.log(shirt.productDetails())
const sock = new Product('Meia branca', 5)
console.log(sock.productDetails())
Product.test()
const tenis = new Tenis('tenis All Star', 100, '37')
console.log(tenis.showNumber())
tenis.this = 'tenis All Star'

// DOM - DOCUMENT OBJECT MODEL

console.log(document.getElementById('titulo'))
console.log(document.getElementsByClassName('text'))

const texts = document.querySelector('.text')
console.log(texts)

texts.forEach((data) => console.log(data))

texts[0].textContent = 'Estou alterando o primeiro parágrafo'

texts[0].innerHTML = '<span>Testando uma alteração...</span>'

texts[1].style.backgroundColor = 'red'

texts[2].remove()

const button = document.querySelector('#btn')

button.addEventListener('click', (event) => (texts[3].style.backgroundColor='orange'))

//callbacks

// promises

// programação assíncrona
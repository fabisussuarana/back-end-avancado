// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Callback

// const fs = require('fs')

// console.log('Primeiro comando')
// console.log('Segundo comando')
// console.log('Terceiro comando')

// fs.readFile('./test.txt',callback)

// function callback(err,content) {
//     if (err) return console.error('erro!') 
//     console.log(String(content))
// }

// // utilizando programação assíncrona
// setTimeout(myFunction, 5000)
// function myFunction(){
//     console.log('testando a função')
// }

// setTimeout(() => (console.log('Testando setTimeout')), 1000)

// function a() {
//     const data = new Date()
    
//     let hora = data.getHours()
//     let minuto = data.getMinutes()
//     let segundo = data.getSeconds()

//     console.log(`${hora}:${minuto}:${segundo}`)
// }

// setTimeout(a, 5000)
// setTimeout(a, 5000)
// setTimeout(a, 5000)

// utilizando programação síncrona

// function sum(){
//     const result = 1+1
//     if (result === 2) {
//         success()
//     }else{
//         erro()
//     }
// }

// function success() {
//     console.log('Sucesso! O resultado é 2!')
// }

// function erro() {
//     console.log('Erro')
// }
// sum()
// console.log('testando')

/* mesmo console.log('testando') sendo mais rápido de executar, seria exibido depois da chamada da função, 
isto porque ele espera a função terminar de calcular, o que carateriza programação síncrona*/

// usando callback no caso de cima(tornando assíncrono) - função sendo passada como parâmetro
/*function sum(callback, callbackError){
    const result = 1+1
    if (result === 2) {
        callback()
    }else{
        callbackError()
    }
}

sum(
    () => (console.log('Sucesso! O resultado é 2!')),
    () => (console.log('Erro'))
)
console.log('testando') */

// Promise - é uma classe; a tradução é: promessa
// then()
// resolve e reject

// const promise = new Promise((resolve,reject)=> {
//     const result = 1+2
//     if (result === 2) {
//         resolve('Deu certo!')
//     }else{
//         reject('Erro')
//     }
// })

// promise.then(
//     (resultado)=>(console.log(resultado)),
//     ((erro)=>(console.log(erro)))) 

// voltando para callback

// const name = 'Paulo Sampaio'

// function whoIsTheBest(callback, callbackError){
//     if (name != 'Paulo Sampaio') {
//         callbackError('Está errado. Não há como!')
//     }else{
//         callback({
//             name: name,
//             message: `humildemente o melhor`
//         })
//     }
// }
// whoIsTheBest( 
//     ((success)=>(console.log(`${success.name} é ${success.message}`))),
//     ((error)=>(console.error())) )

// promise

const name = 'Paulo Sampaio'

const p = new Promise((resolve, reject)=> {
    if (name != 'Paulo Sampaio') {
        resolve('Está errado. Não há como!')
    }else{
        reject({
            name: name,
            message: `é humildemente o melhor`
        })
    }
})

p.then(
    (resultado)=>(console.log(`${success.name} é ${success.message}`)),
    (erro)=>(console.log(erro))
)


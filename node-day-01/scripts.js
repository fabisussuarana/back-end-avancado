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

const fs = require('fs')

console.log('Primeiro comando')
console.log('Segundo comando')
console.log('Terceiro comando')

fs.readFile('./test.txt',callback)

function callback(err,content) {
    if (err) return console.error('erro!') 
    console.log(String(content))
}

// utilizando programação assíncrona
setTimeout(myFunction, 5000)
function myFunction(){
    console.log('testando a função')
}

setTimeout(() => (console.log('Testando setTimeout')), 1000)

function a() {
    const data = new Date()
    
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    console.log('${hora}:${minuto}:${segundo}')
}

setTimeout(a, 5000)
setTimeout(a, 5000)
setTimeout(a, 5000)
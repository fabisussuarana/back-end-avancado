const { stat } = require('fs')
const os = require('os') //require - importa
const log = require('./logger')

// const { parse } = require('path')

// console.log(os)

// const { freemem, totalmem } = os

// //freemem - para saber a memória livre
// //totalmem - para saber a memória total
// //parseInt - para passar para inteiro e eliminar as casas decimais

// const total = parseInt(totalmem()/1024/1024)
// const freeMem = parseInt(freemem()/1024/1024)
// const usage = total - freeMem
// const percents = parseInt((usage/total) * 100)

// const stats = {
//     total: `${total} MB`,
//     freeMem: `${freeMem} MB`,
//     percents: `${percents}% em uso`
// }

// //table deixa os dados em uma tabela
// console.log('++++++ MEMORY STATS ++++++')
// console.table(stats)

//setInterval - para exibir algo em determinado intervalo de tempo
setInterval( () => { 
    const { parse } = require('path')

    console.log(os)

    const { freemem, totalmem } = os

    //freemem - para saber a memória livre
    //totalmem - para saber a memória total
    //parseInt - para passar para inteiro e eliminar as casas decimais

    const total = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt(freemem()/1024/1024)
    const usage = total - freeMem
    const percents = parseInt((usage/total) * 100)

    const stats = {
        total: `${total} MB`,
        freeMem: `${freeMem} MB`,
        percents: `${percents}% em uso`
    }

    //table deixa os dados em uma tabela
    console.clear()
    console.log('++++++ MEMORY STATS ++++++')
    console.table(stats)

    let hora = getHours()
    let minuto = getMinutes()
    let segundo = getSeconds()

    //passando stats para JSON para que possa ser interpretado e inserido no arq log.txt
    log('Rodando...', JSON.stringify(stats), ) 

 }, 1000 )
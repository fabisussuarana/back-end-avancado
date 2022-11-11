const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter= new EventEmitter()

emitter.on('log', (message, object)=>{
    fs.appendFile( path.join(__dirname, 'log.txt'), 
    object+'\n', 
    (err)=>{if(err) throw err})
    console.log(message)
})

// emitter.emit('logger', 'texto que vai ser exibido...')

function log(message, object) {
    emitter.emit('log', message, object) 
}

module.exports = log //para exportar
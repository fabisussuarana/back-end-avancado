//document = documento HTML
//querySelector = para selecionar algo no documento HTML
//#form = id do formulário
const form = document.querySelector('#form') 

const input01 = form.querySelector('[name=input01]') //no formulário está sendo selecionado o input com o nome input01
const op = form.querySelector('[name=op]') //no formulário está sendo selecionado o select com o nome op
const input02 = form.querySelector('[name=input02]')
const enviar = form.querySelector('[name=enviar]')
const result = form.querySelector('[name=resultado]')

//addEventListener = para usar eventos
//click = um evento
//(event) => { } = função que chamei de event
//então se o botão enviar for clicado a função event vai ser executada
enviar.addEventListener('click', (event) => { 
    if(!input01.value && !input02.value){ //se não tiver valor em input01 e input02, não retorna nada
        return
    }

    if(op.value == '+'){
        result.value = Number(input01.value) + Number(input02.value) //Number = converter String para Number
    }
    else if(op.value == '-'){
        result.value = Number(input01.value) - Number(input02.value)
    }
    else if(op.value == '/'){
        if (input01.value > 0 && input02.value == 0) {
            result.value = 'Erro na divisão!'
            console.log(result.value)
            return
        } 
        result.value = Number(input01.value) / Number(input02.value)
    }
    else if(op.value == '*'){
        result.value = Number(input01.value) * Number(input02.value)
    }

    console.log(result.value)
})
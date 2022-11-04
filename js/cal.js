const formData = new FormData(document.querySelector('form'))

let n1 = formData.get('num1')
let n2 = formData.get('num2')

console.log(n1)

let result = n1 + n2

console.log(result)
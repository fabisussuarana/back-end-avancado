
fetch('http://jsonplaceholder.typicode.com/users')
    .then(T => T.json())
    .then(Users => Users.map((User)=>{
        let b = document.getElementById('a');
        b.innerHTML+=`<li>nome: ${User.name}</li><li>email: ${User.email}</li><br>`
    }).catch((error)=>{
        console.log('Erro!')
    }))


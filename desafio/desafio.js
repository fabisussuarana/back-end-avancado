
fetch('http://jsonplaceholder.typicode.com/user')
    .then(T => T.json())
    .then(Users => Users.map((User)=>{
        let b = document.getElementById('a');
        b.innerHTML+=`<li>nome: ${User.name}</li><br><li>email: ${User.email}</li>`
    }).catch((error)=>{
        console.log('Erro!')
    }))


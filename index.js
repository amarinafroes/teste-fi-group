var lista = [];

const objs = [ 
    {
        "email":"marina@gmail.com",
        "senha": 12345

    },
    {
        "email":"gabriela@gmail.com",
        "senha": 6789

    },
    {
        "email":"joana@gmail.com",
        "senha": 101112

    },
    {
        "email":"raquel@gmail.com",
        "senha": 131415

    },
    {
        "email":"andre@gmail.com",
        "senha": 161718

    },
    {
        "email":"roberto@gmail.com",
        "senha": 192021

    },
    {
        "email":"joao@gmail.com",
        "senha": 222324

    },
    {
        "email":"marcelino@gmail.com",
        "senha": 252627

    },
    {
        "email":"nunes@gmail.com",
        "senha": 282930

    },
    {
        "email":"joabe@gmail.com",
        "senha": 313233

    }

]

 


function autenticacao(){
    var usuario = document.getElementById("email").value;
    console.log(email);

    var password = document.getElementById("senha").value;
    var numero = 0;
   while (numero < 10) {
    

    if (objs[numero].email == usuario && objs[numero].senha == password ){
        
        window.open("outra.html");
        break;
       
    }
    else{
        console.log(objs[numero])
        numero +=1;
    }

    
   }
    
}
    
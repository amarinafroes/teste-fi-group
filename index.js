const usuario = "marina@gmail.com"
const password = 12345



function autenticacao(){
    var email = document.getElementById("email").value;
    console.log(email);

    var senha = document.getElementById("senha").value;
    console.log(senha);

    if (email == usuario ){
        
        if( senha == password){
            window.open("outra.html");
        }
        else{
            alert("Senha Invalida");
        }
    }
    else{
        alert("Email Invalido");
    }
}
    
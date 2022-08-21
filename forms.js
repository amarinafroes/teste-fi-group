var pessoa = [];

 console.log(pessoa)



function conferindo(){
   
var nome = document.getElementById("nome").value;

var email = document.getElementById("email").value;

var senha = document.getElementById("senha").value;

var senhanova = document.getElementById("confirmasenha").value;
 
   pessoa.push(nome) 
   pessoa.push(email)
   if (senhanova == senha) {
   
    pessoa.push(senha)

   }else{
    alert("Conflito entre as senhas")
   }
   console.log(pessoa);

   return pessoa;

}
console.log(pessoa);
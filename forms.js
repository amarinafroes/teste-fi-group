var pessoa = [];

 console.log(pessoa)



function conferindo(){
    var pessoa = [];
var nome = document.getElementById("nome").value;

var email = document.getElementById("email").value;

var senha = document.getElementById("senha").value;

var senhanova = document.getElementById("confirmasenha").value;
 
   pessoa[0] = nome
   pessoa[1] = email
   if (senhanova == senha) {
   
    pessoa[2] = senha

   }else{
    alert("Conflito entre as senhas")
   }
   console.log(pessoa);
   return pessoa[0];

}
console.log(pessoa);
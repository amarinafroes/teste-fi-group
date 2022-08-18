console.log("olá mundo!");



function funcaoum(){
    var entrada = document.getElementById("inputSpeed").value;
    console.log(entrada);

    var saida = document.getElementById("aparicao");
    saida.innerHTML += entrada;
}

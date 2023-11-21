
function insert(num){
    var numero  = document.getElementById('Resultado').innerHTML;
    document.getElementById("Resultado").innerHTML = numero + num
}
function clean(){
    document.getElementById('Resultado').innerHTML = ""
}
function back(){
    var resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = resultado.substring(0, resultado.length  - 1);
}
function calcular(){
    var resultado = document.getElementById('Resultado').innerHTML;
    if(resultado){
        document.getElementById('Resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('Resultado').innerHTML = "Não consegue calcular nada";
    }
}

module.exports = {insert, clean, back, calcular}

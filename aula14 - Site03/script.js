function contar() {
    console.log("Entrou na função")
    let numInicio = document.getElementById("numInicial").value;  
    let numFinal = document.getElementById("numFinal").value;
    let passo = document.getElementById("passo").value;
    let resultado = document.getElementById("resultado");

    if(numInicio == "" || numFinal == "" || passo == ""){
        definirValores(numInicio, numFinal, passo);
        alert("É necesário digitar o número iniciaL, final e o passo para realizar a contagem");
        resultado.innerHTML = `Impossível contar!`;
        return
    }
    let i = Number(numInicio)
    let f = Number(numFinal)
    let p = Number(passo)

    if(i < f){
        definirValores(numInicio, numFinal, passo);
        for(let c = i; c <= f; c += p ){
            resultado.innerHTML += `👉${c}`;
        }
        resultado.innerHTML +=`🏁`
    }else{
        for(let c = i; c >= f; c -= p){
            resultado.innerHTML += `👉${c}`
        }
        resultado.innerHTML +=`🏁`
    }
}

function definirValores(numInicio, numFinal, passo){
    document.getElementById("numInicial").value = numInicio;
    document.getElementById("numFinal").value = numFinal;
    document.getElementById("passo").value = passo;
}

function apagar() {
    document.getElementById("resultado").innerHTML = `Preparando a contagem`;
    document.getElementById("numInicial").value = ""; 
    document.getElementById("numFinal").value = "";
    document.getElementById("passo").value = "";
}
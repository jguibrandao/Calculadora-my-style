const escrita = document.getElementById("escrita");
const numeros = document.querySelectorAll("[id*=numero]");
const operadores = document.querySelectorAll("[id*=_]");

let novoNumero = true;
let operador;
let numeroAnterior;



const atualizarDisplay = (texto) => {
    if(novoNumero) {
        escrita.textContent = texto;
        novoNumero = false;
    } else {
        escrita.textContent += texto;
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
for (var i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", inserirNumero);
}

const operacaoPendente = () => operador != undefined;

const calcular = () => {
    if(operacaoPendente()) {
        const numeroAtual = parseFloat(escrita.textContent);
        if(operador == "+") {
            novoNumero = true;
            atualizarDisplay(numeroAnterior + numeroAtual);
        } else if (operador == "-") {
            novoNumero = true;
            atualizarDisplay(numeroAnterior - numeroAtual);
        } else if (operador == "x") {
            novoNumero = true;
            atualizarDisplay(numeroAnterior * numeroAtual);
        } else if (operador == "÷") {
            novoNumero = true;
            atualizarDisplay(numeroAnterior / numeroAtual);
        } else if (operador == "%") {
            novoNumero = true;
            atualizarDisplay(numeroAnterior/100);
        }              
    }
}
const selecionarOperador = (evento) => {
    if(novoNumero == false) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(escrita.textContent);
    }
}
for (var i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener("click", selecionarOperador);
}



const ativarIgual = () => {
    calcular();
    operador = undefined;
}

const limparescrita = () => {
    novoNumero = true;
    atualizarDisplay("");
}

const apagarUmNumero = () => escrita.textContent = escrita.textContent.slice(0, -1);

const inverterNumero = () => {
    novoNumero = true;
    atualizarDisplay(escrita.textContent * -1);
}

const existeDecimal = () => escrita.textContent.indexOf(".") != -1;
const existeValor = () => escrita.textContent.length > 0;
const inserirPonto = () => {
    if(!existeDecimal()) {
        if(existeValor()) {
            atualizarDisplay(".");
        } else {
            atualizarDisplay("0.");
        }
    } else {alert("Não é possível inserir . duas vezes.")}
}

const mapaTeclado = {
    "0" : "numero0",
    "1" : "numero1",
    "2" : "numero2",
    "3" : "numero3",
    "4" : "numero4",
    "5" : "numero5",
    "6" : "numero6",
    "7" : "numero7",
    "8" : "numero8",
    "9" : "numero9",
    "/" : "_dividir",
    "*" : "_multiplicar",
    "-" : "_subtrair",
    "+" : "_somar",
    "=" : "resultado",
    "Enter" : "resultado",
    "Backspace" : "apagar",
    "c" : "c",
    "." : "virgula",
    "," : "virgula"
}

const mapearTeclado = (evento) => {
    const tecla = evento.key

    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) != -1;
    if(teclaPermitida()) {
        document.getElementById(mapaTeclado[tecla]).click();
    }
}

document.getElementById("resultado").addEventListener("click", ativarIgual);
document.getElementById("limpar").addEventListener("click", limparescrita);
document.getElementById("apagar").addEventListener("click", apagarUmNumero);
document.getElementById("inverter").addEventListener("click", inverterNumero);
document.getElementById("virgula").addEventListener("click", inserirPonto);
document.addEventListener("keydown", mapearTeclado);
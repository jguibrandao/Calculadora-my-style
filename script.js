function adicionarItem(conteudo) {
    document.getElementById("input").innerHTML = `<h1 class="escrita">${conteudo} </h1>`
}

const escrita = document.getElementById("escrita");
const numeros = document.querySelectorAll("[id*=numero]");

const atualizarDisplay = (texto) => {
    escrita.textContent += texto;
}
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

for (var i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", inserirNumero);
}
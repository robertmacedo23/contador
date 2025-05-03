let numero = 0;

const spanNumero = document.getElementById("numero");
const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");

botaoAumentar.addEventListener("click", function () {
  numero++;
  spanNumero.textContent = numero;
});

botaoDiminuir.addEventListener("click", function () {
  numero--;
  spanNumero.textContent = numero;
});

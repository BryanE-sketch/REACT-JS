const boton = document.getElementById('btnContar');
const textoContador = document.getElementById('contador');

let clics = 0;

boton.addEventListener('click', () => {
  clics++;
  textoContador.textContent = `Clics: ${clics}`;
});
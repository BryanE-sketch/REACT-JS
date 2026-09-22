const textoTiempo = document.getElementById('tiempo');
const btnIniciar = document.getElementById('btnIniciar');
const btnPausar = document.getElementById('btnPausar');
const btnReiniciar = document.getElementById('btnReiniciar');

let segundosTotales = 0;
let intervalo = null;

function formatearTiempo(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  const dosDigitos = (num) => String(num).padStart(2, '0');

  return `${dosDigitos(horas)}:${dosDigitos(minutos)}:${dosDigitos(segundos)}`;
}

function actualizarPantalla() {
  textoTiempo.textContent = formatearTiempo(segundosTotales);
}

btnIniciar.addEventListener('click', () => {
  if (intervalo !== null) {
    return;
  }

  intervalo = setInterval(() => {
    segundosTotales++;
    actualizarPantalla();
  }, 1000);
});

btnPausar.addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
});

btnReiniciar.addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
  segundosTotales = 0;
  actualizarPantalla();
});
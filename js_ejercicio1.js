const boton = document.getElementById('btnCambiarColor');

function generarColorAleatorio() {
  const letrasHex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letrasHex[Math.floor(Math.random() * 16)];
  }
  return color;
}

boton.addEventListener('click', () => {
  document.body.style.backgroundColor = generarColorAleatorio();
});
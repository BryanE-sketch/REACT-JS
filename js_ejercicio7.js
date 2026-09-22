const inputLongitud = document.getElementById('inputLongitud');
const btnGenerar = document.getElementById('btnGenerar');
const resultado = document.getElementById('resultadoContrasena');

const caracteres =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function generarContrasena(longitud) {
  let contrasena = '';
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[indiceAleatorio];
  }
  return contrasena;
}

btnGenerar.addEventListener('click', () => {
  const longitud = parseInt(inputLongitud.value, 10);

  if (inputLongitud.value.trim() === '' || isNaN(longitud) || longitud < 4) {
    resultado.textContent = 'Error: la longitud debe ser mayor o igual a 4.';
    return;
  }

  resultado.textContent = generarContrasena(longitud);
});
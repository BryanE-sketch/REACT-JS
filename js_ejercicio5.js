const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const resultado = document.getElementById('resultado');

function obtenerNumeros() {
  const num1 = parseFloat(inputNumero1.value);
  const num2 = parseFloat(inputNumero2.value);

  if (inputNumero1.value.trim() === '' || inputNumero2.value.trim() === '') {
    resultado.textContent = 'Error: debes llenar ambos campos.';
    return null;
  }

  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = 'Error: ingresa solo valores numéricos.';
    return null;
  }

  return [num1, num2];
}

document.getElementById('btnSumar').addEventListener('click', () => {
  const numeros = obtenerNumeros();
  if (numeros) {
    resultado.textContent = `Resultado: ${numeros[0] + numeros[1]}`;
  }
});

document.getElementById('btnRestar').addEventListener('click', () => {
  const numeros = obtenerNumeros();
  if (numeros) {
    resultado.textContent = `Resultado: ${numeros[0] - numeros[1]}`;
  }
});

document.getElementById('btnMultiplicar').addEventListener('click', () => {
  const numeros = obtenerNumeros();
  if (numeros) {
    resultado.textContent = `Resultado: ${numeros[0] * numeros[1]}`;
  }
});

document.getElementById('btnDividir').addEventListener('click', () => {
  const numeros = obtenerNumeros();
  if (numeros) {
    if (numeros[1] === 0) {
      resultado.textContent = 'Error: no se puede dividir entre cero.';
      return;
    }
    resultado.textContent = `Resultado: ${numeros[0] / numeros[1]}`;
  }
});
const textarea = document.getElementById('parrafo');
const conteo = document.getElementById('conteo');

function contarPalabras(texto) {
  const textoLimpio = texto.trim();
  if (textoLimpio === '') {
    return 0;
  }
  return textoLimpio.split(/\s+/).length;
}

function contarCaracteres(texto) {
  return texto.replace(/\s/g, '').length;
}

textarea.addEventListener('input', () => {
  const texto = textarea.value;
  const palabras = contarPalabras(texto);
  const caracteres = contarCaracteres(texto);

  conteo.textContent = `Palabras: ${palabras} | Caracteres: ${caracteres}`;
});
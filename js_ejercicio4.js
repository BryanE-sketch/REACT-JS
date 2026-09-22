const elementos = ['Perro', 'Gato', 'Pez', 'Conejo', 'Loro', 'Tortuga'];

const input = document.getElementById('inputBuscar');
const lista = document.getElementById('listaElementos');

function renderizarLista(items) {
  lista.innerHTML = '';

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
  });
}

input.addEventListener('input', () => {
  const texto = input.value.toLowerCase();

  const filtrados = elementos.filter((item) =>
    item.toLowerCase().includes(texto)
  );

  renderizarLista(filtrados);
});

renderizarLista(elementos);
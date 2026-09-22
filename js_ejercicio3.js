const input = document.getElementById('inputElemento');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', () => {
  const texto = input.value.trim();

  if (texto === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = texto;

  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = 'Eliminar';
  btnEliminar.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = '';
  input.focus();
});
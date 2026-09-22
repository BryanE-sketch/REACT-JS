const inputTarea = document.getElementById('inputTarea');
const btnAgregarTarea = document.getElementById('btnAgregarTarea');
const listaTareas = document.getElementById('listaTareas');
const btnLimpiarCompletadas = document.getElementById('btnLimpiarCompletadas');

const CLAVE_STORAGE = 'tareas';

function cargarTareas() {
  const datos = localStorage.getItem(CLAVE_STORAGE);
  return datos ? JSON.parse(datos) : [];
}

function guardarTareas(tareas) {
  localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
}

function renderizarTareas() {
  const tareas = cargarTareas();
  listaTareas.innerHTML = '';

  tareas.forEach((tarea) => {
    const li = document.createElement('li');
    li.className = 'item-tarea';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.completada;
    checkbox.addEventListener('change', () => {
      marcarCompletada(tarea.id, checkbox.checked);
    });

    const span = document.createElement('span');
    span.textContent = tarea.texto;
    if (tarea.completada) {
      span.classList.add('tarea-completada');
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    listaTareas.appendChild(li);
  });
}

function agregarTarea() {
  const texto = inputTarea.value.trim();
  if (texto === '') {
    return;
  }

  const tareas = cargarTareas();
  tareas.push({
    id: Date.now(),
    texto: texto,
    completada: false,
  });

  guardarTareas(tareas);
  renderizarTareas();

  inputTarea.value = '';
  inputTarea.focus();
}

function marcarCompletada(id, completada) {
  const tareas = cargarTareas();
  const tareasActualizadas = tareas.map((tarea) =>
    tarea.id === id ? { ...tarea, completada } : tarea
  );

  guardarTareas(tareasActualizadas);
  renderizarTareas();
}

function limpiarCompletadas() {
  const tareas = cargarTareas();
  const tareasPendientes = tareas.filter((tarea) => !tarea.completada);

  guardarTareas(tareasPendientes);
  renderizarTareas();
}

btnAgregarTarea.addEventListener('click', agregarTarea);
btnLimpiarCompletadas.addEventListener('click', limpiarCompletadas);

renderizarTareas();
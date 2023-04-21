const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const mensajeTextarea = document.getElementById('exampleFormControlTextarea1');

// Oculta el placeholder cuando se hace clic en el campo "Nombre"
nombreInput.addEventListener('click', () => {
  nombreInput.removeAttribute('placeholder');
});

// Oculta el placeholder cuando se hace clic en el campo "Apellido"
apellidoInput.addEventListener('click', () => {
  apellidoInput.removeAttribute('placeholder');
});

// Oculta el placeholder cuando se hace clic en el campo "Mensaje"
mensajeTextarea.addEventListener('click', () => {
  mensajeTextarea.removeAttribute('placeholder');
});

// Vuelve a mostrar el placeholder cuando se hace clic fuera del campo "Nombre"
nombreInput.addEventListener('blur', () => {
  nombreInput.setAttribute('placeholder', 'Nombre');
});

// Vuelve a mostrar el placeholder cuando se hace clic fuera del campo "Apellido"
apellidoInput.addEventListener('blur', () => {
  apellidoInput.setAttribute('placeholder', 'Apellido');
});

// Vuelve a mostrar el placeholder cuando se hace clic fuera del campo "Mensaje"
mensajeTextarea.addEventListener('blur', () => {
  mensajeTextarea.setAttribute('placeholder', '¿Sobre qué quieres hablar?');
});
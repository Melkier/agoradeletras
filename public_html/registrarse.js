// Referencia al formulario y al mensaje de salida
const registerForm = document.getElementById('registerForm');
const messageDiv = document.getElementById('message');

// Validar el formulario al enviarlo
registerForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que se recargue la página

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validaciones
    if (!name || !email || !password || !confirmPassword) {
        showMessage('Todos los campos son obligatorios.', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showMessage('Las contraseñas no coinciden.', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage('La contraseña debe tener al menos 6 caracteres.', 'error');
        return;
    }

    // Si todo está correcto
    showMessage(`¡Registro exitoso, ${name}! Bienvenido a la librería.`, 'success');
    registerForm.reset(); // Limpiar el formulario
});

// Mostrar mensaje en pantalla
function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
}

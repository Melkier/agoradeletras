// Mostrar la ventana emergente al cargar la página
window.onload = function () {
  const ventanaEmergente = document.getElementById('ventanaEmergente');
  ventanaEmergente.classList.add('activo');
};

// Función para cerrar la ventana emergente
function cerrarVentana() {
  const ventanaEmergente = document.getElementById('ventanaEmergente');
  ventanaEmergente.classList.remove('activo');
}

// Agregar eventos al botón de cerrar
document.getElementById('cerrarVentanaEmergente').addEventListener('click', cerrarVentana);
document.getElementById('cerrarVentanaEmergenteFooter').addEventListener('click', cerrarVentana);

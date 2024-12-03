// Obtener elementos del DOM
const openModal = document.getElementById("openModal");
const popupModal = document.getElementById("popup");
const closeModal = document.querySelector(".close");

// Mostrar el modal al hacer clic en el botón
openModal.addEventListener("click", () => {
    popupModal.style.display = "flex";
});



// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
    if (event.target === popupModal) {
        popupModal.style.display = "none";
    }
  
});
// Mostrar el popup automáticamente al cargar la página
window.onload = function() {
    document.getElementById("popup").style.display = "flex";
};

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}

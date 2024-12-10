// Mostrar modal con la información del libro
function showBookDetails(title, author, year, description, imageUrl) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-author').innerText = author;
    document.getElementById('modal-year').innerText = year;
    document.getElementById('modal-description').innerText = description;

    const imageElement = document.getElementById('modal-image');
    imageElement.src = imageUrl;

    const modal = document.getElementById('bookModal');
    modal.style.display = 'block';
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('bookModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Redirigir al carrito
function goToCart() {
    window.location.href = 'carrito.html'; // Redirige a carrito.html
}
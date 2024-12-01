// Lista de libros disponibles
const books = [
    { id: 1, title: "Mi princesa Valiente", price: 50, cover: "https://m.media-amazon.com/images/I/41RdUhZHnsL._SY445_SX342_.jpg" },
    { id: 2, title: "Caperucita Roja", price: 60, cover: "https://images.cdn3.buscalibre.com/fit-in/360x360/3e/47/3e47814def20958bbc2b30f6899c6f15.jpg" },
    { id: 3, title: "EL despertar del Leviatan", price: 45, cover: "https://images.cdn3.buscalibre.com/fit-in/360x360/66/82/6682cc1546c05687a387a65e755b3e85.jpg" },
    { id: 4, title: "Harry Potter", price: 55, cover: "https://www.crisol.com.pe/media/catalog/product/cache/cf84e6047db2ba7f2d5c381080c69ffe/9/7/9788418174070_8d1gp7kb3jqm0eph.jpg" },
    { id: 5, title: "Eres un Chico Fantastico", price:34,cover: "https://m.media-amazon.com/images/I/51JqWSg8fpL._SY445_SX342_.jpg" } ,
    { id: 6, title: "El patito feo", price:40 , cover: "https://m.media-amazon.com/images/I/41ETILCnp6L._SY445_SX342_.jpg" },
];

// Array para los libros en el carrito
let cart = [];

// Referencias al DOM
const booksContainer = document.getElementById('books');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

// Renderizar la lista de libros disponibles
function renderBooks() {
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';

        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <p>${book.title}</p>
            <p>S/ ${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Agregar al carrito</button>
        `;

        booksContainer.appendChild(bookDiv);
    });
}

// Agregar un libro al carrito
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    renderCart();
}

// Renderizar el carrito
function renderCart() {
    cartItems.innerHTML = ''; // Limpiar el carrito
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement('li');
        li.innerHTML = `
            ${item.title} - S/ ${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = `Total: S/ ${total.toFixed(2)}`;
}

// Eliminar un libro del carrito
function removeFromCart(index) {
    cart.splice(index, 1); // Eliminar el libro del carrito
    renderCart();
}

// Inicializar la página
renderBooks();

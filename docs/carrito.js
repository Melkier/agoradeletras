// Lista de libros disponibles
const books = [
    { id: 1, title: "MI PRINCESA VALIENTE ", price: 59, cover: "https://m.media-amazon.com/images/I/41RdUhZHnsL._SY445_SX342_.jpg" },
    { id: 2, title: "CAPERUCITA ROJA", price: 60, cover: "https://images.cdn3.buscalibre.com/fit-in/360x360/3e/47/3e47814def20958bbc2b30f6899c6f15.jpg" },
    { id: 3, title: "EL DESPERTAR DE LEVIATAN ", price: 59.90, cover: "https://images.cdn3.buscalibre.com/fit-in/360x360/66/82/6682cc1546c05687a387a65e755b3e85.jpg" },
    { id: 4, title: "HARRY POTTER", price: 55, cover: "https://www.crisol.com.pe/media/catalog/product/cache/cf84e6047db2ba7f2d5c381080c69ffe/9/7/9788418174070_8d1gp7kb3jqm0eph.jpg" },
    { id: 5, title: "ERES UN CHICO FANTASTICO", price:34,cover: "https://m.media-amazon.com/images/I/51JqWSg8fpL._SY445_SX342_.jpg" } ,
    { id: 6, title: "EL PATITO FEO ", price:40 , cover: "https://m.media-amazon.com/images/I/41ETILCnp6L._SY445_SX342_.jpg" },
    { id: 7, title: "LIBRO DE BILL", price: 79, cover:"https://m.media-amazon.com/images/I/81UKxPfStlL._SL1500_.jpg" },
    { id: 8, title: "BLUE LOCK 20", price:64 , cover:"https://cdn.kobo.com/book-images/d0259d14-58b5-443a-b4a3-f59ebd47a85b/1200/1200/False/blue-lock-20.jpg"},
    { id: 9, title: "1984", price:79 , cover: "https://www.libreriasangraal.it/wp-content/uploads/2017/09/1984-copertina.jpg"},
    { id: 10, title: "DIARIO DE GREG 3 - ESTO ES EL COLMO", price:99.90 , cover:"https://m.media-amazon.com/images/I/91elVx-SxTL._SL1500_.jpg" },
    { id: 11, title: "DUNE", price:39.90 , cover:"https://image.tmdb.org/t/p/original/dXls45apB8CZD7E26w4WQoVg8XL.jpg" },
    { id: 12, title: "EL MISTERIO DE LAS CRIATURAS ALADAS (MITICAS 2)", price:59.90 , cover: "https://www.astrolibros.com/25057-large_default/miticas-2-el-misterio-de-las-criaturas-aladas.jpg" },
    { id: 13, title: "TU ALMA RESPONDE", price:60 , cover: "https://www.planetadelibros.com.pe/usuaris/libros/fotos/399/m_libros/portada_tu-alma-responde_rosa-maria-cifuentes-castaneda_202405031903.jpg" },
    { id: 14, title: "ROMPER EL CÍRCULO", price:89 , cover: "https://www.chapintv.com/wp-content/uploads/2024/08/romper-el-circulo-1024x572.jpg"},
    { id: 15, title: "ELEVA TU JUEGO CULINARIO", price: 79 , cover:" https://www.crisol.com.pe/media/catalog/product/cache/e5cc2c691f06511cdf7342631ad45b04/9/7/9786123320355.jpg"},
    { id: 16, title: "MÁS ALLÁ DEL AMOR 2", price: 99.90 , cover: "https://freakelitex.com/wp-content/uploads/2023/12/Resena-manga-mas-alla-del-amor-2-cover.jpg"},
    { id: 17, title: "BLUE LOCK 19", price:39.90 , cover: "https://images.cdn3.buscalibre.com/fit-in/360x360/e9/ec/e9ec39467f47203ef29061730954c3cc.jpg"},
     { id: 18, title: "SPY X FAMILY 11", price:59.90 , cover: "https://cdn.waterstones.com/bookjackets/large/9781/9747/9781974743292.jpg"},
      { id: 19, title: "GUNM BATTLE ANGEL ALITA #1", price:64 , cover: " https://i.pinimg.com/originals/93/51/78/93517823859fff71fa16b5c2d57d1735.jpg"},
    { id: 20, title: "HOOKY (TOMO 3)", price:79 , cover: "https://bdi.dlpdomain.com/album/9782808504300-couv-M700x1200.jpg "},
     { id: 21, title: "MY HERO ACADEMY", price:59 , cover: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974719778/my-hero-academia-vol-26-9781974719778_hr.jpg" },
     { id: 22, title: "LA CONSPIRACION DEL CAMALEON", price:59 , cover:  "https://www.milcomics.com/1451540-thickbox_default/el-asombroso-spiderman-16-la-conspiracion-del-camaleon-marvel-premiere.jpg" },
    { id: 23, title: "BERSERK", price:59 , cover: "https://ramenparados.com/wp-content/uploads/2017/05/Berserk-Maximum-1.jpg"},
    { id: 24, title: "HELLSTAR REMINA", price:64 , cover: "https://www.agapea.com/ECC-Ediciones/Hellstar-Remina-i6n12219062.jpg"},
    { id: 25, title: "RELATOS TERRORÍFICOS 3", price:59 , cover:  "https://gekko.pe/wp-content/uploads/2023/12/Junji-Ito-terror-despedazado-9.jpg" },
    { id: 26, title: "MUERTO ENFERMO DE AMOR", price:79 , cover: " https://dojiw2m9tvv09.cloudfront.net/73484/product/el-muerto-enfermo-de-amor8992.jpg" },
    { id: 27, title: "LA ISLA DEL TESORO", price:94 , cover: " https://images-na.ssl-images-amazon.com/images/I/91klik5JtpL.jpg" },
    { id: 28, title: "HISTORIA DE LA PIRATERÍA", price:79 , cover: "https://librosdelreves.com/wp-content/uploads/2023/06/9788416981540-us-300.jpg"},
    { id: 29, title: "EL CAPITÁN BLOOD", price:89 , cover: " https://pics.filmaffinity.com/El_capitaan_Blood-728305013-large.jpg"},
    { id: 30, title: "EL CORSARIO NEGRO", price:89 , cover: "https://pics.filmaffinity.com/il_corsaro_nero-702590471-large.jpg"},
    { id: 31, title: "LAS MUJERES PIRATAS", price:59 , cover: "https://cdn.agapea.com/Editorial-Renacimiento/Las-mujeres-piratas-i7n676610.jpg"},
    { id: 32, title: "VENGEANCE OF THE PIRATE QUEEN", price:59 , cover: " https://images.macmillan.com/folio-assets/interiors-images/9781250864970.IN01.jpg" },
    { id: 33, title: "PIRATAS", price:60 , cover: " https://www.marcialpons.es/media/img/portadas/9788491993315.jpg"},
  
        
];

// Array para los libros en el carrito
let cart = [];

// Referencias al DOM (actualizado con IDs únicos)
const booksContainer = document.getElementById('books-unique');
const cartItems = document.getElementById('cart-items-unique');
const totalPrice = document.getElementById('total-price-unique');

// Renderizar la lista de libros disponibles
function renderBooks() {
    booksContainer.innerHTML = ''; // Asegurarse de limpiar antes de agregar
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-item-unique';

        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>S/ ${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Agregar al carrito</button>
        `;

        booksContainer.appendChild(bookDiv);
    });
}

// Agregar un libro al carrito
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        cart.push(book);
        renderCart();
    }
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
            <button class="book-button" onclick="removeFromCart(${index})">Eliminar</button>
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
const bookList = [
{
    "id": 1,
    "titulo": "Tu Alma Responde",
    "autor": "Rosa María Cifuentes",
    "anio": 2023,
    "descripcion": "Descubre una obra conmovedora que explora las emociones profundas de quienes buscamos respuestas. ¡Una lectura imprescindible para los que buscan un cambio espiritual!",
    "imagen": "imagenes/TU ALMA RESPONDE.jpeg",
    "precio": 60.00
  },
  {
    "id": 2,
    "titulo": "Romper el Círculo",
    "autor": "Colleen Hoover",
    "anio": 2023,
    "descripcion": "¡Un thriller emocional que desafiará tus creencias sobre el amor y el destino! Perfecto para los amantes de las historias profundas y apasionadas.",
    "imagen": "imagenes/ROMPER EL CIRCULO.jpeg",
    "precio": 89.00
  },
  {
    "id": 3,
    "titulo": "Eleva Tu Juego Culinario",
    "autor": "Giacomo Bocchio",
    "anio": 2023,
    "descripcion": "Este libro es la puerta a nuevas experiencias culinarias. Lleva tu cocina al siguiente nivel con recetas innovadoras y deliciosas.",
    "imagen": "imagenes/ELEVA TU JUEGO CULINARIO.jpeg",
    "precio": 79.00
  },
  {
    "id": 4,
    "titulo": "Más Allá del Amor 2",
    "autor": "Fujimomo",
    "anio": 2023,
    "descripcion": "La secuela de una de las historias más románticas que te hará creer en el amor verdadero. No te pierdas este viaje emocional.",
    "imagen": "imagenes/MÁS ALLA DEL AMOR 2.png",
    "precio": 99.90
  },
  {
    "id": 5,
    "titulo": "Blue Lock 19",
    "autor": "Muneyuki Kaneshiro y Yusuke Nomura",
    "anio": 2023,
    "descripcion": "Si eres fanático del fútbol y de los mangas intensos, no puedes perderte este emocionante capítulo lleno de adrenalina y pasión por el deporte.",
    "imagen": "imagenes/BLUE LOCK 19.png",
    "precio": 39.90
  },
  {
    "id": 6,
    "titulo": "Spy X Family 11",
    "autor": "Tatsuya Endo",
    "anio": 2023,
    "descripcion": "La trama de espionaje y acción se mezcla con la ternura y el humor en esta divertida saga. ¡Perfecto para los fanáticos del espionaje y las familias poco convencionales!",
    "imagen": "imagenes/SPY X FAMILY 11.png",
    "precio": 59.90
  },
  {
    "id": 7,
    "titulo": "GUNM BATTLE ANGEL ALITA #1",
    "autor": "Yukito Kishiro",
    "anio": 1990,
    "descripcion": "Un emocionante viaje en un futuro post-apocalíptico donde la lucha por la supervivencia es brutal. Ideal para los fanáticos de la ciencia ficción y las historias épicas de cibernética.",
    "imagen": "imagenes/GUNM BATTLE.png",
    "precio": 64.00
  },
  {
    "id": 8,
    "titulo": "BLUE LOCK 20",
    "autor": "Muneyuki Kaneshiro y Yusuke Nomura",
    "anio": 2023,
    "descripcion": "La apasionante saga de fútbol donde los jugadores luchan por su oportunidad de brillar, explorando el deseo y la competitividad al más alto nivel. Perfecto para los fans de los mangas deportivos.",
    "imagen": "imagenes/BLUE LOCK 20- YUSUKE NOMURA; MUNEYUKI KANESHIRO.png",
    "precio": 59.00
  },
  {
    "id": 9,
    "titulo": "HOOKY (TOMO 3)",
    "autor": "Míriam Bonastre Tur",
    "anio": 2023,
    "descripcion": "Un manga lleno de magia, aventuras y giros inesperados, donde los protagonistas deben enfrentarse a su destino en un mundo fantástico. Perfecto para quienes aman las historias de fantasía y magia.",
    "imagen": "imagenes/HOOKY TOMO 3 - MÍRIAM BONASTRE TUR.PNG",
    "precio": 79.00
  },
  {
    "id": 10,
    "titulo": "MÁS ALLÁ DEL AMOR 4",
    "autor": "Fujimomo",
    "anio": 2023,
    "descripcion": "Una obra emocional y romántica que explora el amor, las dificultades y las decisiones de vida. Perfecto para los fanáticos de los mangas sentimentales y apasionados.",
    "imagen": "imagenes/mas-alla-del-amor-4 portada.jpg",
    "precio": 99.90
  },
  {
    "id": 11,
    "titulo": "BLUE LOCK 19",
    "autor": "Muneyuki Kaneshiro y Yusuke Nomura",
    "anio": 2023,
    "descripcion": "La emoción de la competencia y la lucha por la victoria siguen siendo el centro de este manga, donde los jugadores se enfrentan a nuevos desafíos. Ideal para los fanáticos de los deportes y el manga de acción.",
    "imagen": "imagenes/BLUE LOCK 19.png",
    "precio": 39.90
  },
  {
    "id": 12,
    "titulo": "SPY X FAMILY 11",
    "autor": "Tatsuya Endo",
    "anio": 2023,
    "descripcion": "La trama de espionaje y acción se mezcla con la ternura y el humor en esta divertida saga. ¡Perfecto para los fanáticos del espionaje y las familias poco convencionales!",
    "imagen": "imagenes/SPY X FAMILY 11.png",
    "precio": 59.90
  },
  
  {
    "id": 13,
    "titulo": "El despertar del Leviatán",
    "autor": "James S. A. Corey",
    "anio": 2011,
    "descripcion": "Un inicio épico para la saga de ciencia ficción que mezcla intrigas políticas y aventuras espaciales. Perfecto para los amantes del género sci-fi.",
    "imagen": "imagenes/El despertar del Leviatan - James S. A. Corey.jpg",
    "precio": 64.00
  },
  {
    "id": 14,
    "titulo": "1984",
    "autor": "George Orwell",
    "anio": 1949,
    "descripcion": "Una novela distópica que explora el control social, la vigilancia y la libertad. Ideal para quienes buscan reflexionar sobre la sociedad.",
    "imagen": "imagenes/1984 - George Orwell.jpg",
    "precio": 59.00
  },
  {
    "id": 15,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "anio": 1965,
    "descripcion": "Un clásico de la ciencia ficción que mezcla política, religión y ecología en un vasto universo futurista. Un imprescindible para los fanáticos del género.",
    "imagen": "imagenes/Dune - Frank Herbert.jpg",
    "precio": 79.00
  },
  {
    "id": 16,
    "titulo": "Libro de Bill",
    "autor": "Alex Hirsch",
    "anio": 2016,
    "descripcion": "El libro oficial de Gravity Falls, lleno de secretos, misterios y diversión para los fanáticos de la serie.",
    "imagen": "imagenes/libro de bill.jpg",
    "precio": 79.00
  },
  {
    "id": 17,
    "titulo": "My Hero Academy",
    "autor": "Kohei Horikoshi",
    "anio": 2014,
    "descripcion": "Una historia de superhéroes donde jóvenes estudiantes entrenan para convertirse en los héroes del mañana. Perfecto para los amantes del shōnen.",
    "imagen": "imagenes/my hero academi.jpg",
    "precio": 59.00
  },
  {
    "id": 18,
    "titulo": "La conspiración del camaleón",
    "autor": "Nick Spencer",
    "anio": 2021,
    "descripcion": "Un intrigante cómic lleno de giros inesperados y conspiraciones que atrapan desde el inicio.",
    "imagen": "imagenes/LA CONSPIRACION DEL CAMALEON.jpeg",
    "precio": 59.00
  },
  {
    "id": 19,
    "titulo": "Berserk",
    "autor": "Kentaro Miura",
    "anio": 1989,
    "descripcion": "Un manga épico de fantasía oscura que sigue la historia de Guts, un mercenario con un pasado trágico y una lucha implacable por sobrevivir.",
    "imagen": "imagenes/BERSERK.jpeg",
    "precio": 59.00
  },

  {
    "id": 20,
    "titulo": "El despertar del Leviatán",
    "autor": "James S. A. Corey",
    "anio": 2011,
    "descripcion": "Un inicio épico para la saga de ciencia ficción que mezcla intrigas políticas y aventuras espaciales. Perfecto para los amantes del género sci-fi.",
    "imagen": "imagenes/El despertar del Leviatan - James S. A. Corey.jpg",
    "precio": 64.00
  },
  {
    "id": 21,
    "titulo": "1984",
    "autor": "George Orwell",
    "anio": 1949,
    "descripcion": "Una novela distópica que explora el control social, la vigilancia y la libertad. Ideal para quienes buscan reflexionar sobre la sociedad.",
    "imagen": "imagenes/1984 - George Orwell.jpg",
    "precio": 59.00
  },
  {
    "id": 22,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "anio": 1965,
    "descripcion": "Un clásico de la ciencia ficción que mezcla política, religión y ecología en un vasto universo futurista. Un imprescindible para los fanáticos del género.",
    "imagen": "imagenes/Dune - Frank Herbert.jpg",
    "precio": 79.00
  },
  {
    "id": 23,
    "titulo": "Libro de Bill",
    "autor": "Alex Hirsch",
    "anio": 2016,
    "descripcion": "El libro oficial de Gravity Falls, lleno de secretos, misterios y diversión para los fanáticos de la serie.",
    "imagen": "imagenes/libro de bill.jpg",
    "precio": 79.00
  },
  {
    "id": 24,
    "titulo": "My Hero Academy",
    "autor": "Kohei Horikoshi",
    "anio": 2014,
    "descripcion": "Una historia de superhéroes donde jóvenes estudiantes entrenan para convertirse en los héroes del mañana. Perfecto para los amantes del shōnen.",
    "imagen": "imagenes/my hero academi.jpg",
    "precio": 59.00
  },
  {
    "id": 25,
    "titulo": "La conspiración del camaleón",
    "autor": "Nick Spencer",
    "anio": 2021,
    "descripcion": "Un intrigante cómic lleno de giros inesperados y conspiraciones que atrapan desde el inicio.",
    "imagen": "imagenes/LA CONSPIRACION DEL CAMALEON.jpeg",
    "precio": 59.00
  },
  {
    "id": 26,
    "titulo": "Berserk",
    "autor": "Kentaro Miura",
    "anio": 1989,
    "descripcion": "Un manga épico de fantasía oscura que sigue la historia de Guts, un mercenario con un pasado trágico y una lucha implacable por sobrevivir.",
    "imagen": "imagenes/BERSERK.jpeg",
    "precio": 59.00
  },

  {
    "id": 27,
    "titulo": "Hellstar Remina",
    "autor": "Junji Ito",
    "anio": 2005,
    "descripcion": "Un manga de horror cósmico que explora el terror del fin del mundo y los oscuros aspectos de la humanidad.",
    "imagen": "imagenes/HELLSTAR REMINA.png",
    "precio": 64.00
  },
  {
    "id": 28,
    "titulo": "Relatos Terroríficos 3",
    "autor": "Junji Ito",
    "anio": 2011,
    "descripcion": "La tercera entrega de historias inquietantes que solo Junji Ito puede crear. Un festín de terror gráfico y psicológico.",
    "imagen": "imagenes/RELATOS TERRORRIFICOS 3.png",
    "precio": 59.00
  },
  {
    "id": 29,
    "titulo": "Muerto Enfermo de Amor",
    "autor": "Junji Ito",
    "anio": 2020,
    "descripcion": "Una inquietante colección de historias que entrelazan romance y horror de la mano del maestro Junji Ito.",
    "imagen": "imagenes/MUERTO ENFERMO DE AMOR.png",
    "precio": 79.00
  },

  {
    "id": 30,
    "titulo": "La Isla del Tesoro",
    "autor": "Robert Louis Stevenson",
    "anio": 1883,
    "descripcion": "Una aventura clásica de piratas, tesoros escondidos y luchas por la supervivencia en una isla remota.",
    "imagen": "imagenes/la isla del tesoro.jpeg",
    "precio": 94.00
  },
  {
    "id": 31,
    "titulo": "Historia de la Piratería",
    "autor": "Philip Gosse",
    "anio": 1851,
    "descripcion": "Una obra detallada que recorre la historia de la piratería, explorando sus orígenes y leyendas más conocidas.",
    "imagen": "imagenes/historia de la pirateria.jpg",
    "precio": 79.00
  },
  {
    "id": 32,
    "titulo": "El Capitán Blood",
    "autor": "Rafael Sabatini",
    "anio": 1922,
    "descripcion": "Un clásico de aventuras que narra las peripecias de un hombre injustamente esclavizado que se convierte en pirata.",
    "imagen": "imagenes/el capitan blood.jpeg",
    "precio": 89.00
  },
  {
    "id": 33,
    "titulo": "El Corsario Negro",
    "autor": "Emilio Salgari",
    "anio": 1898,
    "descripcion": "La épica historia de un pirata misterioso que lucha por la justicia en los mares del Caribe.",
    "imagen": "imagenes/el corsario negro.jpg",
    "precio": 89.00
  },
  {
    "id": 34,
    "titulo": "Las Mujeres Piratas",
    "autor": "Henry Musnik",
    "anio": 2005,
    "descripcion": "Una fascinante mirada a las historias de mujeres que se convirtieron en figuras legendarias de la piratería.",
    "imagen": "imagenes/las mujeres piratas.jpeg",
    "precio": 59.00
  },
  {
    "id": 35,
    "titulo": "Vengeance of the Pirate Queen",
    "autor": "Tricia Levensellers",
    "anio": 2020,
    "descripcion": "Un relato cautivador sobre una pirata que busca venganza mientras lidia con traiciones y secretos ocultos.",
    "imagen": "imagenes/vengeance of the pirate queen.jpeg",
    "precio": 59.00
  },
  {
    "id": 36,
    "titulo": "Piratas",
    "autor": "Peter Lebr",
    "anio": 2012,
    "descripcion": "Una novela que narra las aventuras y los desafíos de un grupo de piratas en busca de gloria y tesoros perdidos.",
    "imagen": "imagenes/piratas.jpeg",
    "precio": 69.00
  },

  {
    "id": 37,
    "titulo": "Libro de Bill",
    "autor": "Alex Hirsch",
    "anio": 2021,
    "descripcion": "Una historia hilarante y conmovedora que explora el mundo surrealista y absurdo de Bill, un joven con un sentido del humor peculiar y una visión única de la vida.",
    "imagen": "imagenes/libro de bill.jpg",
    "precio": 79.00
  },
  {
    "id": 38,
    "titulo": "Blue Lock 20",
    "autor": "Muneyuki Kaneshiro y Yusuke Nomura",
    "anio": 2023,
    "descripcion": "Prepárate para un emocionante capítulo de este manga que redefine el fútbol como un deporte de estrategia y pasión. ¡Ideal para fanáticos del fútbol y los mangas intensos!",
    "imagen": "imagenes/BLUE LOCK 20- YUSUKE NOMURA; MUNEYUKI KANESHIRO.png",
    "precio": 64.00
  },
  {
    "id": 39,
    "titulo": "Caperucita Roja y el Lobo en Verso",
    "autor": "Roald Dahl",
    "anio": 1984,
    "descripcion": "Una ingeniosa reinterpretación del cuento clásico con un toque único de humor y poesía que solo Roald Dahl puede ofrecer. ¡Perfecto para lectores de todas las edades!",
    "imagen": "imagenes/CAPERUCITA ROJA Y EL LOBO EN VERSO - ROALD DAHL.PNG",
    "precio": 59.00
  },
  {
    "id":  40,
    "titulo": "1984",
    "autor": "George Orwell",
    "anio": 1949,
    "descripcion": "Una distopía inquietante que te sumergirá en un mundo controlado por la vigilancia total y la censura. Una obra maestra que te hará reflexionar sobre la libertad y el poder.",
    "imagen": "imagenes/1984 - George Orwell.jpg",
    "precio": 79.00
  },
  {
    "id": 41,
    "titulo": "Diario de Greg 3 - Esto es el Colmo",
    "autor": "Jeff Kinney",
    "anio": 2010,
    "descripcion": "Continúa la hilarante saga de Greg Heffley en esta entrega llena de situaciones cómicas y desastres escolares que te harán reír sin parar.",
    "imagen": "imagenes/DIARIO DE GREG 3 - ESTO ES EL COLMO - JEFF KINNEY.png",
    "precio": 99.90
  },
  {
    "id": 42,
    "titulo": "Dune",
    "autor": "Frank Herbert",
    "anio": 1965,
    "descripcion": "Explora Arrakis, el desierto más misterioso del universo, y sumérgete en una épica historia de política, religión y supervivencia. Un imprescindible de la ciencia ficción.",
    "imagen": "imagenes/Dune - Frank Herbert.jpg",
    "precio": 39.90
  },
  {
    "id": 43,
    "titulo": "El Misterio de las Criaturas Aladas (Míticas 2)",
    "autor": "Lauren Magaziner",
    "anio": 2020,
    "descripcion": "Adéntrate en un mundo mágico lleno de criaturas míticas y resuelve misterios que desafían la lógica. ¡Una aventura para lectores curiosos y soñadores!",
    "imagen": "imagenes/EL MISTERIO DE LAS CRIATURAS ALADAS (MITICAS 2) - LAUREN MAGAZINER.png",
    "precio": 59.90
  },
  {
    "id": 44,
    "titulo": "El Despertar del Leviatán",
    "autor": "James S. A. Corey",
    "anio": 2011,
    "descripcion": "Una impactante odisea en el espacio llena de conspiraciones, alianzas peligrosas y acción. Perfecto para los amantes de la ciencia ficción moderna.",
    "imagen": "imagenes/El despertar del Leviatan - James S. A. Corey.jpg",
    "precio": 59.90
  }
];

 const bookListContainer = document.getElementById("bookList");
function renderBooks(filteredBooks) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Limpiar la lista actual

    if (filteredBooks.length === 0) {
        // Si no hay libros que coincidan, mostrar un mensaje
        const noResultMessage = document.createElement("div");
        noResultMessage.classList.add("no-result");
        noResultMessage.textContent = "Libro no encontrado";
        bookList.appendChild(noResultMessage);
    } else {
        // Renderizar libros encontrados
        filteredBooks.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("libro-elemento");
            bookItem.innerHTML = `
                <img src="${book.imagen}" alt="${book.titulo}" />
                <div>
                    <h4>${book.titulo}</h4>
                    <p>Autor: ${book.autor}</p>
                    <p>Precio: S/ ${book.precio.toFixed(2)}</p>
                </div>
            `;
            bookList.appendChild(bookItem);
        });
    }
}

function filterBooks() {
    const searchText = document.querySelector(".search-bar").value.toLowerCase();
    const filteredBooks = bookList.filter(book =>
        book.titulo.toLowerCase().includes(searchText) ||
        book.autor.toLowerCase().includes(searchText)
    );
    renderBooks(filteredBooks);
}

// Renderiza todos los libros al cargar la página
document.addEventListener("DOMContentLoaded", () => renderBooks(books));




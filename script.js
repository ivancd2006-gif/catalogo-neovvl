	// Este es un arreglo (lista) de productos.
// Aquí es donde tú y tu hija agregarán cada autoparte.
let products = [
    {
        id: 1,
        name: "Motor Nissan SR20VET",
        description: "Motor completo con sus accesorios. Funcionando perfectamente.",
        image: "vet.jpg",
        category: "motores",
        status: "available"
    },
    {
        id: 2,
        name: "Transmisión para Nissan GTi-R",
        description: "Transmisión manual AWD de 5 velocidades. Se puede enviar a todo México.",
        image: "tranny.jpg",
        category: "transmisiones",
        status: "available"
    },
    {
        id: 3,
        name: "Rear Suspensión GTi-R",
        description: "Kit completo de amortiguadores y resortes usados pero en buen estado.",
        image: "rear.jpg",
        category: "suspension",
        status: "available"
    },
    {
        id: 4,
        name: "Clutch ACT XT",
        description: "Kit Clutch nuevo.",
        image: "act.jpg",
        category: "transmisiones",
        status: "available"
    },
    {
        id: 5,
        name: "Kit Turbo Navideño",
        description: "Ideal para SR20DET. Usado en buenas condiciones.",
        image: "turbo.jpg",
        category: "performance",
        status: "available"
    },
    {
        id: 6,
        name: "kit turbo GGTT3",
        description: "Motor completo con sus accesorios. Funcionando perfectamente.",
        image: "ggtt.jpg",
        category: "motores",
        status: "sold"
    },
];

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');

// Función para mostrar los productos en la página
function displayProducts(productsToDisplay) {
    productsGrid.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let contactButtonHTML = '';
        if (product.status === 'available') {
            // Muestra el botón de contacto si el producto está disponible
            contactButtonHTML = `
                <a href="https://wa.me/526861076914?text=Hola,%20me%20interesa%20el%20producto:%20${product.name}" class="contact-btn" target="_blank">
                    ¡Me interesa!
                </a>
            `;
        } else {
            // Muestra un mensaje de 'Vendido' si no está disponible
            contactButtonHTML = `<div class="sold-out-tag">VENDIDO</div>`;
            productCard.classList.add('sold-out'); // Agrega una clase para estilizarlo si lo deseas
        }
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                ${contactButtonHTML}
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Lógica para la búsqueda de productos
searchInput.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) || 
               product.description.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProducts);
});

// Lógica para los filtros de categoría
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remueve la clase 'active' de todos los botones
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Agrega la clase 'active' al botón que se hizo clic
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        if (category === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }
    });
});

// Muestra todos los productos al cargar la página por primera vez
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

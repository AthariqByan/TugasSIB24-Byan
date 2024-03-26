// Function to fetch products from API
function fetchProducts() {
    fetch("https://api.postman.com/collections/6600fddd87c91a116419dc9a.mockapi.io/produk")
        .then((response) => response.json())
        .then((data) => displayProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
}

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.src = product.image; // Assuming the API returns 'image' field
    card.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = product.name; // Assuming the API returns 'name' field
    card.appendChild(name);

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`; // Assuming the API returns 'price' field
    card.appendChild(price);

    return card;
}

// Function to display products
function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear previous content

    products.forEach((product) => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Call the function to fetch and display products when the page loads
fetchProducts();

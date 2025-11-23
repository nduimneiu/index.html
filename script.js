const productos = [
    {
        marca: "Apple",
        nombre: "iPhone 15 Pro Max",
        precio_old: 1299.99,
        precio: 1199.99,
        gb: "256GB",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        descuento: "-8%",
        destacado: true
    },
    {
        marca: "Samsung",
        nombre: "Samsung Galaxy S24 Ultra",
        precio_old: 1199.99,
        precio: 1099.99,
        gb: "256GB",
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c",
        descuento: "-8%",
        destacado: true
    },
    {
        marca: "Apple",
        nombre: "iPhone 15",
        precio: 799.99,
        rating: 4.6,
        gb: "128GB",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        destacado: true
    },
    {
        marca: "Samsung",
        nombre: "Samsung Galaxy Z Fold 5",
        precio_old: 1799.99,
        precio: 1699.99,
        rating: 4.6,
        gb: "512GB",
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
        descuento: "-6%"
    },
    {
        marca: "Google",
        nombre: "Google Pixel 8 Pro",
        precio_old: 999.99,
        precio: 899.99,
        rating: 4.5,
        gb: "128GB",
        img: "https://images.unsplash.com/photo-1539883371294-4f27db9d3b45",
        descuento: "-10%"
    },
    {
        marca: "OnePlus",
        nombre: "OnePlus 12",
        precio: 699.99,
        rating: 4.4,
        gb: "256GB",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
];

const cont = document.getElementById("productosContainer");

function mostrarProductos(lista) {
    cont.innerHTML = "";

    lista.forEach(p => {
        cont.innerHTML += `
            <div class="card">
                <div style="position: relative;">
                    ${p.destacado ? `<span class="badge">Destacado</span>` : ""}
                    ${p.descuento ? `<span class="descuento">${p.descuento}</span>` : ""}
                    <img src="${p.img}">
                </div>
                <div class="card-body">
                    <h4>${p.marca}</h4>
                    <h3>${p.nombre}</h3>
                    <p>⭐ ${p.rating} • ${p.gb}</p>
                    ${p.precio_old ? `<p class="precio-old">$${p.precio_old}</p>` : ""}
                    <p class="precio">$${p.precio.toFixed(2)}</p>
                </div>
            </div>
        `;
    });
}

mostrarProductos(productos);


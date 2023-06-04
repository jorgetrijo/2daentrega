const jean1 = { producto: "JEAN L STRAIGHT HEAT", color: "azul medio", marca: "47 street", precio: 11999};
const jean2 = { producto: "JEAN STRAIGHT MALIBU", color: "azul oscuro", marca: "47 street", precio: 12999};
const jean3 = { producto: "JEAN MOM UNITED", color: "azul medio", marca: "47 street", precio: 10999};
const jean4 = { producto: "JEAN H RELAX TADOW", color: "azul claro", marca: "47 street", precio: 9999};

const productos = [
    {
        id: 1,
        nombre: "Pantalon engomado",
        precio: 6500,
        imagen: "./",
    },
    {
        id: 2,
        nombre: "JEAN STRAIGHT MALIBU",
        precio: 12999,
        imagen: "https://street47.vtexassets.com/arquivos/ids/192991-1200-auto?v=637943731604300000&width=1200&height=auto&aspect=true",
    },
    {
        id: 3,
        nombre: "JEAN MOM UNITED",
        precio: 10999,
        imagen: "https://street47.vtexassets.com/arquivos/ids/185301-1200-auto?v=637840889880300000&width=1200&height=auto&aspect=true",
    },
    {
        id: 4,
        nombre: "JEAN H RELAX TADOW",
        precio: 9999,
        imagen: "https://street47.vtexassets.com/arquivos/ids/180721-1200-auto?v=637827036879770000&width=1200&height=auto&aspect=true",
    },
]

let contadorCarrito = 0;
const carrito = [];

const productoCarritoHTML = (producto) => {
  return `
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
        </div>
      </div>
    </div>`;
};

const mostrarCatalogo = () => {
  const catalogoNodo = document.getElementById("catalogo");
  let catalogoHTML = "";

  for (const producto of productos) {
    catalogoHTML += productoCatalogoHTML(producto);
  }

  catalogoNodo.innerHTML = catalogoHTML;
  botonesCatalogo();
};
const mostrarCarrito = () => {
  const carritoNodo = document.getElementById("carrito");
  const precioNodo = document.getElementById("precioTotal");

  let carritoHTML = "";
  let precio = 0;
  for (const producto of carrito) {
    carritoHTML += productoCarritoHTML(producto);
    precio += producto.precio;
  }

  precioNodo.innerHTML = precio;
  carritoNodo.innerHTML = carritoHTML;
  botonesCarrito();
};

const botonesCatalogo = () => {
  for (const producto of productos) {
    const botonId = `btn-catalogo-${producto.id}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      const productoCarrito = {
        nombre: producto.nombre,
        idCompra: contadorCarrito,
        precio: producto.precio,
      };

      contadorCarrito += 1;
      carrito.push(productoCarrito);
      mostrarCarrito();
    });
  }
};

const botonesCarrito = () => {
  for (const producto of carrito) {
    const botonId = `btn-carrito-${producto.idCompra}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
      carrito.splice(index, 1);
      mostrarCarrito();
    });
  }
};

mostrarCatalogo();

console.log(productoCatalogoHTML(productos[0]));
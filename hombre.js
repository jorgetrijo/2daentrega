const productos = [
  {
      id: 1,
      nombre: "Jean Levis",
      precio: 25000,
      imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwfae42a71/HH5047_MK9_24.jpg?imwidth=915&impolicy=product",
  },
  {
      id: 2,
      nombre: "Jean Kevinston",
      precio: 19000,
      imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw17e28082/HH5047_ML4_24.jpg?imwidth=915&impolicy=product",
  },
  {
      id: 3,
      nombre: "Jean Zara",
      precio: 30000,
      imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw8c9b3b49/HH9570_9LM_24.jpg?imwidth=915&impolicy=product",
  },
  {
      id: 4,
      nombre: "Jean McOwens",
      precio: 10000,
      imagen: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw6f0ff881/HH9362_MK9_24.jpg?imwidth=915&impolicy=product",
  },
]

const catalogo = document.querySelector('div.catalogo#catalogo')

function retornoCardHTML(producto) {
    return `<div class="col">
                <div class="card"><img src="${producto.imagen}" class="card-img-top"/>
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: ${producto.precio}</p>
                    <button id="btn-catalogo-${producto.id}" class="btn btn-success">Agregar</button>
                    </div>
                </div>
            </div>` 
}
function cargarProductos() {
    catalogo.innerHTML = ''
    productos.forEach((producto) => {
        catalogo.innerHTML += retornoCardHTML(producto)
    })
}
cargarProductos()


const dinero = parseInt(prompt("Cuanto dinero podés gastar?"))
const dineroDisponible = productos.filter((el) => el.precio <= dinero)
if (dineroDisponible.length == 0){
    console.log("Lo siento, no tenemos ningun producto disponible por ese precio")
}
else {
    console.log("Podés comprar los siguientes productos: ")
    dineroDisponible.forEach((el)=> console.log(el.nombre));
}
function elegirMarca() {
    const marca = prompt("Qué marca te gustaría comprar?")
    const marcaElegida = productos.find((el) => el.nombre == marca)
    console.log(marcaElegida)
}

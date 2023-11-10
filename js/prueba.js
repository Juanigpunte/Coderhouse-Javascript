const productos = [
    {
        id: "mother1",
        nombre: 'Gigabyte B450M ds3h v2',
        price: 153,
        thumbnail: '../images/Mother_Gigabyte_B450M_DS3H_V2_DDR4_AM4_22c8d45a-grn.jpg',

    },
    {
        id: "mother2",
        nombre: 'MSI H510M PRO-E',
        price: 165,
        thumbnail: '../images/Mother_MSI_H510M_PRO-E_DDR4_LGA_1200_89a861ba-grn.jpg',
    },
    {
        id: "mother3",
        nombre: 'MSI X670-P PRO WIFI',
        price: 190,
        thumbnail: '../images/Mother_MSI_X670-P_PRO_WIFI_AM5_be20ca6c-grn.jpg',
    },
    {
        id: "cpu1",
        nombre: 'AMD Ryzen 5 5600x',
        price: 252,
        thumbnail: '../images/AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-grn.jpg',

    },
    {
        id: "cpu2",
        nombre: 'AMD Ryzen 7 5800x',
        price: 290,
        thumbnail: '../images/Procesador_AMD_Ryzen_7_7700X_5.4GHz_Turbo_AM5_-_No_incluye_Cooler_-_C_VIDEO_5db10196-grn.jpg',

    },
    {
        id: "cpu3",
        nombre: 'Intel i7 11700KF 11Th',
        price: 350,
        thumbnail: '../images/Intel_Core_i7_11700KF_5.0GHz_Turbo_Socket_1200_Rocket_Lake_56a482fd-grn.jpg',

    },
    {
        id: "gpu1",
        nombre: 'RTX 3060 MSI VENTUS',
        price: 450,
        thumbnail: '../images/Placa_de_Video_ASUS_GeForce_RTX_3060_TI_8GB_GDDR6_TUF_GAMING_OC_V2_6be149e2-grn.jpg',
    },
    {
        id: "gpu2",
        nombre: 'RTX 4070 ASUS DUAL',
        price: 680,
        thumbnail: '../images/ASUS_GeForce_RTX_4070_12GB_GDDR6X_Dual_White_OC_faa85c69-grn.jpg',
    },
    {
        id: "gpu3",
        nombre: 'RX 6750 XT XFX QICK',
        price: 600,
        thumbnail: '../images/Placa_de_Video_XFX_Radeon_RX_6750_XT_ULTRA_12GB_GDDR6_Speedster_03492b8c-grn.jpg',
    },
    {
        id: "psu1",
        nombre: 'Be Quiet! 600W 80 Plus Bronze U9',
        price: 70,
        thumbnail: '../images/Fuente_Be_Quiet__600W_80_Plus_Bronze_U9_06c10bd9-grn.jpg',

    },
    {
        id: "psu2",
        nombre: 'ASUS ROG 1000W 80 Plus Gold',
        price: 170,
        thumbnail: '../images/Fuente_ASUS_ROG_STRIX_1000W_80_Plus_Gold_Full_Modular_1000G_8c2a799c-grn.jpg',

    },
    {
        id: "psu3",
        nombre: 'Gigabyte 450W 80 Plus Bronze',
        price: 60,
        thumbnail: '../images/Fuente_Gigabyte_450W_80_Plus_Bronze_P450B_800859dd-grn.jpg',

    },];

/* CREAR NODOS DE LOS PRODUCTOS Y PONERLOS EN EL DOM */
//CARD DE MIS PRODUCTOS EN LA TIENDA
const Card = (props) => {
    let { id, nombre, price, thumbnail } = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');

    div.innerHTML = `
        <img src= ${thumbnail} alt="foto de ${nombre}"></img>
        <div class="card-body">
            <h2 id="name">${nombre}</h2>
            <p id="price">U$D: ${price}</p>
            <button class="cartButton${id}" id="save-button" type="button" class="button">
            <span class="button__text">Comprar</span>
            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
            </button>
        </div>
      `;
    return div
}


//CREAR EL CONTENDEDOR DE LA TIENDA Y RENDERIZAR LAS CARDS DE MIS PRODUCTOS
const productsContainer = (props) => {

    let { prods } = props;
    let section = document.createElement('section');

    section.setAttribute('class', 'card-container')

    prods.forEach(prod => {
        const card = Card(prod);
        section.append(card);
    });

    return section;
}

/* ----------------- */


// CARRITO DE COMPRAS
// Inicializar carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const guardarContador = () => {
    localStorage.setItem("counter", JSON.stringify(counter));
    counterDisplay.innerHTML = JSON.parse(localStorage.getItem("counter"));

};

const cartButtons = document.querySelectorAll(`.button`);

// Agregar producto al carrito
cartButtons.forEach(cartButton => {
    cartButton.addEventListener("click", () => {
        const indexProductoSelec = Array.prototype.indexOf.call(cartButtons, cartButton);

        const productoAgregar = misProductos.filter((producto) => producto.id === indexProductoSelec)[0];
        // contador del carrito

        counter++;
        guardarContador();


        alertaProductAgregadoAlCarrito();
        renderizarCarrito();
        renderizarPrecioTotal();
        guardarCarrito();
    });
});

// Agregar objetos al dom
const cartContent = document.getElementById("cart");
function renderizarCarrito() {
    cartContent.innerHTML = '';
    carrito.forEach((producto) => {
        let item = document.createElement('div');
        item.classList.add(`carritoBox`);
        item.innerHTML += `
            <div class="cart-container" id="${product.id}" >
                <img src= ${product.thumbnail} alt="foto de ${product.nombre}"></img>
                <div class="card-body">
                    <h2 id="name">${product.nombre}</h2>
                    <p id="price">USD: ${product.price}</p>
                    <a class="borrar-btn" id="${product.id}"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg></a>
                </div>
            </div>
            `;
        cartContent.append(item);

    });
}


// Mostrar carrito en pantalla
function pintarCarrito(){
    renderizarCarrito();
    renderizarPrecioTotal();
    sumarTotalCarrito(carrito);
}

// Eliminar Producto
function eliminarProducto(id){
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    guardarCarrito();
    pintarCarrito();
    alertaProductEliminadoDelCarrito();
};


//RENDERIZAR PRODUCTOS EN LA TIENDA
let appProd = document.querySelector('#root');
appProd.append(productsContainer({ prods: productos }));

// Alertas
// Agragar producto al carrito
function alertaProductAgregadoAlCarrito() {
    Toastify({
      text: "Producto agregado al carrito!",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "left",
      stopOnFocus: false,
      style: {
        background: "linear-gradient(0deg, #14a73e 0%, hsl(125, 90%, 68%) 100%)",
      },
  }).showToast();
}

// Producto eliminado del carrito
function alertaProductEliminadoDelCarrito() {
    Toastify({
      text: "Producto eliminado del carrito!",
      duration: 1000,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: false,
      style: {
        background: "linear-gradient(0deg, #a71414 0%, #f76464 100%)",
      },
  }).showToast();
}

// Carrito vaciado
function alertaCarritoVaciado() {
    Toastify({
      text: "Vaciaste el carrito",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: false,
      style: {
        background: "linear-gradient(0deg, #a71414 0%, #f76464 100%)",
      },
  }).showToast();
}
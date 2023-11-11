/*---------------------------- Definicion de PRODUCTOS ----------------------------*/
const productos = [
    {
        id: "0",
        nombre: 'Gigabyte B450M ds3h v2',
        price: 153,
        thumbnail: '../images/Mother_Gigabyte_B450M_DS3H_V2_DDR4_AM4_22c8d45a-grn.jpg',
        categoria: 'motherboards',

    },
    {
        id: "1",
        nombre: 'MSI H510M PRO-E',
        price: 165,
        thumbnail: '../images/Mother_MSI_H510M_PRO-E_DDR4_LGA_1200_89a861ba-grn.jpg',
        categoria: 'motherboards',
    },
    {
        id: "2",
        nombre: 'MSI X670-P PRO WIFI',
        price: 190,
        thumbnail: '../images/Mother_MSI_X670-P_PRO_WIFI_AM5_be20ca6c-grn.jpg',
        categoria: 'motherboards',
    },
    {
        id: "3",
        nombre: 'AMD Ryzen 5 5600x',
        price: 252,
        thumbnail: '../images/AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-grn.jpg',
        categoria: 'procesadores',

    },
    {
        id: "4",
        nombre: 'AMD Ryzen 7 5800x',
        price: 290,
        thumbnail: '../images/Procesador_AMD_Ryzen_7_7700X_5.4GHz_Turbo_AM5_-_No_incluye_Cooler_-_C_VIDEO_5db10196-grn.jpg',
        categoria: 'procesadores',

    },
    {
        id: "5",
        nombre: 'Intel i7 11700KF 11Th',
        price: 350,
        thumbnail: '../images/Intel_Core_i7_11700KF_5.0GHz_Turbo_Socket_1200_Rocket_Lake_56a482fd-grn.jpg',
        categoria: 'procesadores',
    },



    {
        id: "6",
        nombre: 'RTX 3060 MSI VENTUS',
        price: 450,
        thumbnail: '../images/Placa_de_Video_ASUS_GeForce_RTX_3060_TI_8GB_GDDR6_TUF_GAMING_OC_V2_6be149e2-grn.jpg',
        categoria: 'graficas',
    },
    {
        id: "7",
        nombre: 'RTX 4070 ASUS DUAL',
        price: 680,
        thumbnail: '../images/ASUS_GeForce_RTX_4070_12GB_GDDR6X_Dual_White_OC_faa85c69-grn.jpg',
        categoria: 'graficas',
    },
    {
        id: "8",
        nombre: 'RX 6750 XT XFX QICK',
        price: 600,
        thumbnail: '../images/Placa_de_Video_XFX_Radeon_RX_6750_XT_ULTRA_12GB_GDDR6_Speedster_03492b8c-grn.jpg',
        categoria: 'graficas',
    },
    {
        id: "9",
        nombre: 'Be Quiet! 600W 80 Plus Bronze U9',
        price: 70,
        thumbnail: '../images/Fuente_Be_Quiet__600W_80_Plus_Bronze_U9_06c10bd9-grn.jpg',
        categoria: 'fuentes',

    },
    {
        id: "10",
        nombre: 'ASUS ROG 1000W 80 Plus Gold',
        price: 170,
        thumbnail: '../images/Fuente_ASUS_ROG_STRIX_1000W_80_Plus_Gold_Full_Modular_1000G_8c2a799c-grn.jpg',
        categoria: 'fuentes',

    },
    {
        id: "11",
        nombre: 'Gigabyte 450W 80 Plus Bronze',
        price: 60,
        thumbnail: '../images/Fuente_Gigabyte_450W_80_Plus_Bronze_P450B_800859dd-grn.jpg',
        categoria: 'fuentes',

    },];


//Selecciono el root para renderizar mis productos
const shopProducts = document.querySelector('#root')


//Recorro mis productos y creo la card para cada item
productos.forEach((productos) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');

    div.innerHTML = `
    <div id="${productos.id}">
        <img src= ${productos.thumbnail} alt="foto de ${productos.nombre}"></img>
        <div class="card-body">
        <h2 id="name">${productos.nombre}</h2>
        <p id="price">U$D: ${productos.price}</p>
        </div>
    </div>
    `;

    //boton para agregar al carrito
    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    // comprar.className = "button";

    div.append(comprar);
    shopProducts.append(div);

    comprar.addEventListener("click", () => {
        comprar.innerText = "Agregado";
        carrito.push({
            id: productos.id,
            thumbnail: productos.thumbnail,
            nombre: productos.nombre,
            price: productos.price,
        });
        guardarCarrito();
        showCartItems()
        alertaAgregadoAlCarrito()
    })


})


/*---------------------------- CARRITO DE COMPRAS ----------------------------*/

/*-----SI EXISTE UN CARRITO, LO TRAIGO CON GET ITEM, SI NO, LO CREO-----*/
var carrito = JSON.parse(localStorage.getItem('cart')) || [];

const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


/*----- Imprimir productos agregados al carrito en el dom -----*/

const cartContent = document.getElementById('cartContainer')
function showCartItems() {
    cartContent.innerHTML = '';
    carrito.forEach((productos) => {
        let cartItem = document.createElement('div');
        cartItem.setAttribute('class', 'cart-container');
        cartItem.setAttribute('id', productos.id);
        cartItem.innerHTML = `
                <img src= ${productos.thumbnail} alt="foto de ${productos.nombre}"></img>
                <div class="card-body">
                    <h2 id="name">${productos.nombre}</h2>
                    <p id="price">USD: ${productos.price}</p>
                </div>`
            ;

        //boton para eliminar producto del carrito

        let eliminar = document.createElement("button");
        eliminar.innerText = "❌";

        cartItem.append(eliminar)
        cartContent.append(cartItem);

        eliminar.addEventListener("click", () => {
            const foundID = carrito.find((element) => element.id === productos.id);

            carrito = carrito.filter((carritoID) => {
                return carritoID !== foundID;
            })
            alertaEliminadoDelCarrito()
            guardarCarrito();
            showCartItems();
        })
    })
}

/*---------------------------- MIS ALERTAS ----------------------------*/

function alertaAgregadoAlCarrito() {
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "linear-gradient(0deg, #6bc2ff 0%, #6b91ff 100%)",
        },
    }).showToast();
}

// Producto eliminado del carrito
function alertaEliminadoDelCarrito() {
    Toastify({
      text: "Producto eliminado del carrito!",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: false,
      style: {
        background: "linear-gradient(0deg, #a71414 0%, #f76464 100%)",
      },
  }).showToast();
}

































/*---------------------------- Definicion de funciones----------------------------*/


// function agregarAlcarrito(id) {
//     const producto = productos.find((product) => product.id == id);
//     carrito.push(producto);
//     localStorage.setItem('cart', JSON.stringify(carrito));
//     mostrarProductos();
//   }

// function borrarProducto(id) {
//     const index = carrito.findIndex((item) => item.id === id);

//     if (index !== -1) {
//         carrito.splice(index, 1);

//         localStorage.setItem('cart', JSON.stringify(carrito));

//         const productoAgregado = document.querySelector('#cart')
//         const itemElement = document.getElementById(id);

//         if (itemElement) {
//             itemElement.remove();


//         }
//     }
// }


// function mostrarProductos(){
//     const cart = document.querySelector('#cart')
//     const cartLS = JSON.parse(localStorage.getItem('cart'))


//     cartLS.forEach((product) => {
//         cart.innerHTML += `
//         <div class="cart-container">
//             <img src= ${product.thumbnail} alt="foto de ${product.nombre}"></img>
//             <div class="card-body">
//                 <h2 id="name">${product.nombre}</h2>
//                 <p id="price">USD: ${product.price}</p>
//                 <a class="borrar-btn" id="${product.id}"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
//                 <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
//               </svg></a>
//             </div>
//         </div>
//         `;

//          let cartContainer = document.querySelector('.cart-container');
//          const deleteBtn = cartContainer.querySelector('.borrar-btn')
//          deleteBtn.addEventListener('click', () => {
//              borrarProducto(product.id);
//          })
//     })

// }

/*----------------------------Apendear en el id root mi section con cada card de cada producto----------------------------*/


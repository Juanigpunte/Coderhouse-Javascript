const motherboards = [
    {
    id: "mother1",
    nombre: 'Gigabyte B450M ds3h v2',
    price: 90000,
    thumbnail: 'images/Mother_Gigabyte_B450M_DS3H_V2_DDR4_AM4_22c8d45a-grn.jpg',
    
},
{
    id: "mother2",
    nombre: 'MSI H510M PRO-E',
    price: 120000,
    thumbnail:'images/Mother_MSI_H510M_PRO-E_DDR4_LGA_1200_89a861ba-grn.jpg',
},
{
    id: "mother3",
    nombre: 'MSI X670-P PRO WIFI',
    price: 200000,
    thumbnail:'images/Mother_MSI_X670-P_PRO_WIFI_AM5_be20ca6c-grn.jpg',
}
];

const cpus = [
    {
    id: "cpu1",
    nombre: 'Ryzen 5 5600x',
    price: 200000,
    thumbnail: 'images/AMD_Ryzen_5_5600X_4.6GHz_Turbo_AM4___Wraith_Stealth_Cooler_f737ec9f-grn.jpg',
    
},
{
    id: "cpu2",
    nombre: 'Ryzen 7 5800x',
    price: 250000,
    thumbnail: 'images/Procesador_AMD_Ryzen_7_7700X_5.4GHz_Turbo_AM5_-_No_incluye_Cooler_-_C_VIDEO_5db10196-grn.jpg',
    
},
{
    id: "cpu3",
    nombre: 'Intel i7 11700KF',
    price: 220000,
    thumbnail: 'images/Intel_Core_i7_11700KF_5.0GHz_Turbo_Socket_1200_Rocket_Lake_56a482fd-grn.jpg',
    
}
];

const gpus = [
    {
    id: "gpu1",
    nombre: 'RTX 3060 MSI VENTUS',
    price: 447000,
    
},
{
    id: "gpu2",
    nombre: 'RTX 4060ti',
    price: 538000,
    
},
{
    id: "gpu3",
    nombre: 'RX 5600 xt',
    price: 350000,
    
}
];

const psu = [
    {
    id: "psu1",
    nombre: 'Fuente Be Quiet! 600W 80 Plus Bronze U9',
    price: 60000,
    
},
{
    id: "psu2",
    nombre: 'Fuente ASUS ROG 1000W 80 Plus Gold',
    price: 80000,
    
},
{
    id: "psu3",
    nombre: 'Fuente Gigabyte 450W 80 Plus Bronze P450B',
    price: 56000,
    
}
];


const Contenedor = (props) => {

    let { mothers } = props;
    let section = document.createElement('section');

    section.setAttribute('class', 'card-container')

    mothers.forEach(mother => {
        const card = Card(mother);
        section.append(card);
    });

    return section;
}

const Contenedor2 = (props2) => {

    let { procesadores } = props2;
    let section = document.createElement('section');

    section.setAttribute('class', 'card-container')

    procesadores.forEach(procesador => {
        const card2 = Card2(procesador);
        section.append(card2);
    });

    return section;
}

const Card = (props) => {
    let { id, nombre, price, thumbnail } = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');
  
    div.innerHTML = `
      <img src= ${thumbnail} alt="foto de ${nombre}"></img>
     <div class="card-body">
      <h2 id="name">${nombre}</h2>
      <p id="price">ARS: ${price}</p>
      <button onclick="agregarAlcarrito('${id}')" id="save-button" type="button" class="button">
    <span class="button__text">Comprar</span>
    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
  </button>
      </div>
      `;
  
  
    return div 
  
  }

//   const Card2 = (props2) => {
//     let { id, nombre, price, thumbnail } = props2;
//     let div = document.createElement('div');
//     div.setAttribute('class', 'card-content');
  
//     div.innerHTML = `
//       <img src= ${thumbnail} alt="foto de ${nombre}"></img>
//      <div class="card-body">
//       <h2 id="name">${nombre}</h2>
//       <p id="price">ARS: ${price}</p>
//       <button onclick="agregarAlcarrito('${id}')" id="save-button" type="button" class="button">
//     <span class="button__text">Comprar</span>
//     <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
//   </button>
//       </div>
//       `;
  
  
//     return div 
  
//   }

  function borrarProducto(id) {
    const index = carrito.findIndex((item) => item.id === id);

    if (index !== -1) {
        carrito.splice(index, 1);

        localStorage.setItem('cart', JSON.stringify(carrito));

        const productoAgregado = document.querySelector('#cart')
        const itemElement = document.getElementById(id);

        if (itemElement) {
            itemElement.remove();
            
        }
        mostrarProductos();
    }
  }
  
const carrito = [];
  
  function agregarAlcarrito(id) {
      const producto = motherboards.find((mother) => mother.id == id);
      carrito.push(producto);
      localStorage.setItem('cart', JSON.stringify(carrito));
      
    }

    function mostrarProductos(){
        const cart = document.querySelector('#cart')
        const cartLS = JSON.parse(localStorage.getItem('cart'))


        cartLS.forEach((product) => {
            cart.innerHTML += `
            <div class="cart-container">
                <img src= ${product.thumbnail} alt="foto de ${product.nombre}"></img>
                <div class="card-body">
                    <h2 id="name">${product.nombre}</h2>
                    <p id="price">ARS: ${product.price}</p>
                    <a class="borrar-btn" id="${product.id}"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg></a>
                </div>
            </div>
            `;

             let cartContainer = document.querySelector('.cart-container');
             const deleteBtn = cartContainer.querySelector('.borrar-btn')
             deleteBtn.addEventListener('click', () => {
                 borrarProducto(product.id);
             })
        })

    }

let appMothers = document.querySelector('#mothers');
// let appCpus = document.querySelector('#cpus');
appMothers.append(Contenedor({mothers: motherboards}))
// appCpus.append(Contenedor2({procesadores: cpus}))
mostrarProductos();

//Api dolar

fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => console.log(data));
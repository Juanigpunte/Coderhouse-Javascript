const motherboards = [
    {
    id: "mother1",
    nombre: 'Gigabyte B450M ds3h v2',
    price: 153,
    thumbnail: 'images/Mother_Gigabyte_B450M_DS3H_V2_DDR4_AM4_22c8d45a-grn.jpg',
    
},
{
    id: "mother2",
    nombre: 'MSI H510M PRO-E',
    price: 165,
    thumbnail:'images/Mother_MSI_H510M_PRO-E_DDR4_LGA_1200_89a861ba-grn.jpg',
},
{
    id: "mother3",
    nombre: 'MSI X670-P PRO WIFI',
    price: 190,
    thumbnail:'images/Mother_MSI_X670-P_PRO_WIFI_AM5_be20ca6c-grn.jpg',
}
];


// Card

const Card = (props) => {
    let { id, nombre, price, thumbnail } = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');
  
    div.innerHTML = `
      <img src= ${thumbnail} alt="foto de ${nombre}"></img>
     <div class="card-body">
      <h2 id="name">${nombre}</h2>
      <p id="price">U$D: ${price}</p>
      <button onclick="agregarAlcarrito('${id}')" id="save-button" type="button" class="button">
    <span class="button__text">Comprar</span>
    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
  </button>
      </div>
      `;
  
  
    return div 
  
  }

  //Containers de productos

const mothersContainer = (props) => {

    let { mothers } = props;
    let section = document.createElement('section');

    section.setAttribute('class', 'card-container')

    mothers.forEach(mother => {
        const card = Card(mother);
        section.append(card);
    });

    return section;
}

let appMothers = document.querySelector('#mothers');
appMothers.append(mothersContainer({mothers: motherboards}));
// mostrarProductos();

//Api dolar

fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => {
    let dolarBlue = data.venta;
    dolarContainer = document.querySelector('#usd')
    dolarContainer.innerHTML = dolarBlue;
  } );
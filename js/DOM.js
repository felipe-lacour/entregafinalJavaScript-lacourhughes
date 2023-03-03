const mainSeleccion = document.querySelector('#main-seleccion');
const filtros = document.forms['filtros'];
const headerIcono = document.querySelector('#header-icono')
const cartNumero = document.querySelector('#cart-numero')
const canastaVisualizar = document.querySelector('.visualizar')
const divTotal = document.querySelector('.total')
let visualizado = false;

function armadorCarteleras (i){
  const cartelera = document.createElement('div');
  cartelera.classList.add('cartelera');
  cartelera.innerHTML =`
  <div class="cartelera_imagen">
    <img src="${i.imagen}" alt="${i.nombre}">
  </div>
  <div class="cartelera_titulo">
    <h3>${i.nombre}</h3>
  </div>
  <div class="cartelera_info">
    <h5 class="year">${i.fecha}</h5>
    <h5 class="price">$ ${i.precio}</h5>
  </div>
  <div class="cartelera_boton">
    <button id="${i.nombre}">Comprar</button>
  </div>
  `
  mainSeleccion.append(cartelera)

  botones();
}


filtros.addEventListener('click', (e) => {
  switch (e.target.value) {
    case 'Nuevos Lanzamientos':
      mainSeleccion.innerHTML = '';
      peliculasElegidas = peliculas.filter(i => i.genero === nl);
      peliculasElegidas.forEach(i => armadorCarteleras(i));
      break;
    case 'Clasicos':
      mainSeleccion.innerHTML = '';
      peliculasElegidas = peliculas.filter(i => i.genero === cls);
      peliculasElegidas.forEach(i => armadorCarteleras(i));
      break;
    default:
      mainSeleccion.innerHTML = '';
      peliculas.forEach(i => armadorCarteleras(i));
      break;
  }
});

function botones(){
  const botones = document.querySelectorAll('button');
  botones.forEach((i)=>{
    i.addEventListener('click', (e)=>{
      const botonId = e.target.getAttribute('id')
      pelicula = peliculas.find((i)=>{return i.nombre === botonId})
      let existe = canastaDeCompra.includes(pelicula)
      if (!existe){
        canastaDeCompra.push(pelicula)
        canastaNotificacion();
        divTotal.innerHTML='';        
        canastaVisualizar.innerHTML = '';
        canastaFinal = 0
        canastaDeCompra.forEach(i => armadorCanasta(i));
        armadorTotal();
      }
    })
  })
}
function canastaNotificacion (){
  if (canastaDeCompra.length >= 1){
    cartNumero.classList.add('cart-notif_background')
    cartNumero.innerHTML = `<p>${canastaDeCompra.length}</p>`
  }
}
function canastaClick(){
  headerIcono.addEventListener('click', () =>{
    if(canastaDeCompra.length >= 1){
      if (visualizado === false){
        visualizado = true;
        divTotal.style.height = 'fit-content'
        divTotal.style.borderWidth = '1px'
      } else {
        visualizado = false;
        divTotal.style.height = '0'
        divTotal.style.borderWidth = '0px'
      }      
    }

  })
}

function armadorCanasta (i){
  canastaFinal += i.precio
  const visualizarPelicula = document.createElement('div');
  visualizarPelicula.classList.add('visualizar-pelicula');
  visualizarPelicula.innerHTML =`
  <div class="visualizar-pelicula_poster">
    <img src="${i.imagen}" alt="${i.nombre}" />
  </div>
  <div class="visualizar-pelicula_info">
    <div class="visualizar-pelicula_titulo">${i.nombre}</div>
    <div class="visualizar-pelicula_genero">${i.genero.nombre}</div>          
    <div class="visualizar-pelicula_info__extra">
      <div class="visualizar-pelicula_fecha">${i.fecha}</div>
      <div class="visualizar-pelicula_precio">$ ${i.precio}</div>          
    </div>
  </div>
  `
  canastaVisualizar.append(visualizarPelicula);
  divTotal.append(canastaVisualizar)
}

function armadorTotal(){
  const total = document.createElement('div')
  total.classList.add('total-precio')
  total.innerHTML = `
  <div id="total-canasta"> 
    <div><h5>TOTAL:</h5></div>
    <div><p>$${canastaFinal.toFixed(2)}</p></div>
  </div>
  `

  divTotal.append(total)
}



peliculas.forEach(i => armadorCarteleras(i))
canastaClick();

const mainTag = document.getElementById('main__section')
const mainSeleccion = document.querySelector('#main-seleccion');
const filtros = document.forms['filtros'];
const headerIcono = document.querySelector('#header-icono')
const cartNumero = document.querySelector('#cart-numero')
const canastaVisualizar = document.querySelector('.visualizar')
const divTotal = document.querySelector('.total')
let visualizado = false;
const resultadosBusqueda = document.querySelector('#resultados-busqueda')
const armadorCarteleras = (i) => {
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
const armadorCanasta = (i) => {
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
const armadorTotal = () => {
  const total = document.createElement('div')
  total.classList.add('total-precio')
  total.innerHTML = `
  <div id="total-canasta"> 
    <div><h5>TOTAL:</h5></div>
    <div><p>$${canastaFinal.toFixed(2)}</p></div>
  </div>
  <div class="boton-canasta">
    <button id="boton-checkout" class="boton-checkout">Checkout</button>
  </div>
  `

  divTotal.append(total)
}
filtros.addEventListener('click', (e) => {
  switch (e.target.value) {
    case 'Drama':
      filtroPeliculas(drm);
      break;
    case 'Comedia':
      filtroPeliculas(cmd);
      break;
    case 'Accion':
      filtroPeliculas(act);
      break;
    case 'Ciencia Ficcion':
      filtroPeliculas(cncFccn);
      break;
    case 'Romance':
      filtroPeliculas(rmnc);
      break;
    case 'Thriller':
      filtroPeliculas(thrllr);
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
const canastaClick = () => {
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
  mainTag.addEventListener('click', ()=>{
    visualizado = false;
    divTotal.style.height = '0'
    divTotal.style.borderWidth = '0px'
  })
}
const filtroPeliculas = (x)=>{
      mainSeleccion.innerHTML = '';
      peliculasElegidas = peliculas.filter(i => i.genero === x);
      peliculasElegidas.forEach(i => armadorCarteleras(i));
}
const canastaNotificacion = () => {
  if (canastaDeCompra.length >= 1){
    cartNumero.classList.add('cart-notif_background')
    cartNumero.innerHTML = `<p>${canastaDeCompra.length}</p>`
  }
}

const inputBuscador = document.querySelector('#input-buscador')
inputBuscador.addEventListener('input', () => {
const inputValor = inputBuscador.value
resultadosBusqueda.innerHTML = ''
if (inputValor !== ''){  
  let encontrada = peliculas.filter((i) => {
    let fecha = i.fecha.toString()
    if (i.nombre.includes(inputValor) || i.genero.nombre.includes(inputValor) || fecha.includes(inputValor)) {
      return i
    }
  })
  encontrada.forEach(i => {
    let hr = document.createElement('hr')
    let busqueda = document.createElement('div')
    busqueda.classList.add('busqueda');
    busqueda.innerHTML = `
    <div class="busqueda-imagen">
      <img src="${i.imagen}" alt="${i.nombre}">
    </div>
    <div class="busqueda-info">
      <h3 class="busqueda-titulo">${i.nombre}</h3>    
      <h5>${i.genero.nombre}</h5>
      <h4>$${i.precio}</h4>
    </div>
    <div class="busqueda-carrito"></div>
    `

    if(encontrada.length === 1){
      resultadosBusqueda.append(busqueda)
    } else if (encontrada.length > 1){
      resultadosBusqueda.append(busqueda, hr)
    }

  })
}
})
peliculas.forEach(i => armadorCarteleras(i))
canastaClick();

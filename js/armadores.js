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

  botones('button');
  buscador()
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
  clear.innerHTML = `
    <img src="./imagenes/times-circle-svgrepo-com.svg" class="imagen-clear" id="imagen-clear"/>
    <p class="clear-texto">Clear</p>
  `
  canastaVisualizar.append(visualizarPelicula);
  divTotal.append(clear, canastaVisualizar)
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
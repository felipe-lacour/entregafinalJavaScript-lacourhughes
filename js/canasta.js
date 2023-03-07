const canastaNotificacion = () => {
  if (canastaDeCompra.length >= 1){
    cartNumero.classList.add('cart-notif_background')
    cartNumero.style.height = '20px'
    cartNumero.style.width = '20px'
    cartNumero.innerHTML = `<p>${canastaDeCompra.length}</p>`
  }
}

const cerrar = () => {
  visualizado = false;
  divTotal.style.height = '0'
  divTotal.style.borderWidth = '0px'
}

const asistenteArmado = () => {
  localStorageSetter();
  canastaNotificacion();
  divTotal.innerHTML='';
  canastaVisualizar.innerHTML = '';
  canastaFinal = 0
  canastaDeCompra.forEach(i => armadorCanasta(i));
  armadorTotal();
}

const armadorCanasta = i => {
  canastaFinal += i.precio
  const visualizarPelicula = document.createElement('div');
  visualizarPelicula.classList.add('visualizar-pelicula');
  const generoNombre = i.genero && i.genero.nombre ? i.genero.nombre : '';
  visualizarPelicula.innerHTML =`
  <div class="visualizar-pelicula-boton"><button class="visualizar-pelicula-boton-elemento" id="${canastaDeCompra.indexOf(i)}"><img src="${tachitoClear}" id="${canastaDeCompra.indexOf(i)}"/></button></div>
  <div class="visualizar-pelicula_poster">
    <img src="${i.imagen}" alt="${i.nombre}" />
  </div>
  <div class="visualizar-pelicula_info">
    <div class="visualizar-pelicula_titulo">${i.nombre}</div>
    <div class="visualizar-pelicula_genero">${generoNombre}</div>          
    <div class="visualizar-pelicula_info__extra">
      <div class="visualizar-pelicula_fecha">${i.fecha}</div>
      <div class="visualizar-pelicula_precio">$ ${i.precio}</div>          
    </div>
  </div>
  `
  clear.innerHTML = `
    <img src=${tachitoClear} class="imagen-clear" id="imagen-clear"/>
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
  <a href="./vistas/checkout.html">
    <button id="boton-checkout" class="boton-checkout">Checkout</button>
  </a>
  </div>
  `

  divTotal.append(total)
  clearIndividual('.visualizar-pelicula-boton-elemento');
}
function clearIndividual(a){
  const buttons = document.querySelectorAll(a)
  buttons.forEach(i => {
    i.addEventListener('click', (e) => {
      const botonIdClear = e.target.getAttribute('id')
      canastaDeCompra.splice(botonIdClear, 1)
      if(canastaDeCompra.length < 1){
        setBack()
      } else{
        asistenteArmado();
      }
    })
  })
}

const canastaClick = () => {
  headerIcono.addEventListener('click', () =>{
    if(canastaDeCompra.length >= 1){
      if (visualizado === false){
        visualizado = true;
        divTotal.style.height = '500px'
        divTotal.style.borderWidth = '1px'
        buscadorVisualizado = false;
        resultadosBusqueda.style.height = '0'
      } else {
        cerrar();
      }      
    }
  })
  mainTag.addEventListener('click', ()=>{
    visualizado = false;
    divTotal.style.height = '0'
    divTotal.style.borderWidth = '0px'
    buscadorVisualizado = false;
    resultadosBusqueda.style.height = '0'
  })
}


clear.addEventListener('click', ()=>{
  clearCanastaDeCompra();
  setBack();
})



function botones(queBoton){
  const botones = document.querySelectorAll(queBoton);
  botones.forEach((i)=>{
    i.addEventListener('click', (e)=>{
      const botonId = e.target.getAttribute('id');
      pelicula = peliculas.find((i) => i.nombre === botonId)
      if (!pelicula) {
        return;
      }
      const existe = canastaDeCompra.some((i) => i.nombre === pelicula.nombre);
      if (!existe){
        canastaDeCompra.push(pelicula)
        asistenteArmado();
      }
    })
  })
}
const buscador = () => {
  inputBuscador.addEventListener('input', () => {
    buscadorVisualizado = true
    cerrar();
    const inputValor = inputBuscador.value
    resultadosBusqueda.innerHTML = ''
    if (inputValor !== ''){  
      let encontrada = peliculas.filter((i) => {
        let fecha = i.fecha.toString()
        if (i.nombre.includes(inputValor) || i.genero.nombre.includes(inputValor) || fecha.includes(inputValor)) {
          return i
        }
      })
      if(buscadorVisualizado === true){
        resultadosBusqueda.style.height = 'fit-content'
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
            <div class="busqueda-carrito" >
              <img src="./imagenes/basket-svgrepo-com.svg" id="${i.nombre}" class="img-busqueda"/>
            </div>
            `
          if(encontrada.length === 1){
            resultadosBusqueda.append(busqueda)
          } else if((encontrada.indexOf(i) + 1) === encontrada.length){
            resultadosBusqueda.append(busqueda)
          } else if (encontrada.length > 1){
            resultadosBusqueda.append(busqueda, hr)
          }
        })    
      }
      botones('.img-busqueda')
    }
  })
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

function botones(queBoton){
  const botones = document.querySelectorAll(queBoton);
  botones.forEach((i)=>{
    i.addEventListener('click', (e)=>{
      const botonId = e.target.getAttribute('id')
      pelicula = peliculas.find((i)=>{return i.nombre === botonId})
      let existe = canastaDeCompra.includes(pelicula)
      if (!existe){
        canastaDeCompra.push(pelicula)
        localStorageSetter();
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
  while (canastaDeCompra.length > 0){
    canastaDeCompra.pop()
  }
  cartNumero.style.height = '0'
  cartNumero.style.width = '0'
  cartNumero.innerHTML = ''
  divTotal.innerHTML = `
    <div id="clear"></div>
    <div id="canasta-visualizar" class="visualizar"></div>    
  `
  divTotal.style.height = '0'
  visualizarPeliculaClass.forEach(i => i.remove())
  canastaFinal = 0;
  localStorageSetter()
})
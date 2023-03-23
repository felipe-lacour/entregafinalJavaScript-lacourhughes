const buscador = () => {
  inputBuscador.addEventListener('input', () => {
    buscadorVisualizado = true
    cerrar();
    const inputValor = inputBuscador.value
    resultadosBusqueda.innerHTML = ''
    if (inputValor !== ''){  
      let encontrada = peliculas.filter((i) => {
        if (i.nombre.includes(inputValor) || i.genero.includes(inputValor) || i.fecha.year.toString().includes(inputValor)) {
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
              <h5>${i.genero}</h5>
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
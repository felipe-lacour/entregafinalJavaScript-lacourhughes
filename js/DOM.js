const mainSeleccion = document.querySelector('#main-seleccion');
const filtros = document.forms['filtros'];

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

  const botones = document.querySelectorAll('button');
  botones.forEach((i)=>{
    i.addEventListener('click', (e)=>{
      const botonId = e.target.getAttribute('id')
      pelicula = peliculas.find((i)=>{return i.nombre === botonId})
      let existe = canastaDeCompra.includes(pelicula)
      if (!existe){
        canastaDeCompra.push(pelicula)
        console.log(canastaDeCompra)
        return canastaDeCompra;
      }
    })
  })
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



peliculas.forEach(i => armadorCarteleras(i))

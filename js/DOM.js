const mainSeleccion = document.querySelector('#main-seleccion');
const filtros = document.forms['filtros'];

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
    <button>Comprar</button>
  </div>
  `
  mainSeleccion.append(cartelera)
}
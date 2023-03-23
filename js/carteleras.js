const filtroPeliculas = (x)=>{
  mainSeleccion.innerHTML = '';
  peliculasElegidas = peliculas.filter(i => i.genero === x);
  peliculasElegidas.forEach(i => armadorCarteleras(i));
}

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
    <h5 class="year">${DateTime.local(i.fecha.year, i.fecha.month, i.fecha.day).setLocale('fr').toLocaleString()}</h5>
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

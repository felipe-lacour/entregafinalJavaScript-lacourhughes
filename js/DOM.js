const mainSeleccion = document.querySelector('#main-seleccion');
peliculas.forEach(i => {
  let cartelera = document.createElement('div');
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
})
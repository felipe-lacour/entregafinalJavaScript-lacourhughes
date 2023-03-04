const filtroPeliculas = (x)=>{
  mainSeleccion.innerHTML = '';
  peliculasElegidas = peliculas.filter(i => i.genero === x);
  peliculasElegidas.forEach(i => armadorCarteleras(i));
}

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

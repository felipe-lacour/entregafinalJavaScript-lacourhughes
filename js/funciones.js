function compraPeliculas(){
  genero = prompt('Que genero esta buscando comprar? \n 1: Nuevos Lanzamientos \n 2: Clasicos \n ESC: Salir');
  switch (genero){
    case '1':
      peliculasNl.forEach(i => {
        console.log(i.id + '.' + ' ' + i.nombre)  
      })
      peliculasNuevosLanzamientos();
      break;
    case '2':
      peliculasCls.forEach(i => {
        console.log(i.id + '.' + ' ' + i.nombre)
      })
      peliculasClasicos();
      break;      
    case 'ESC':
      salir();
      break;
    default:
      alert('Genero no encontrado');
      compraPeliculas(); 
      break;
  }
}
function peliculasNuevosLanzamientos(){
  pelicula = prompt('Que pelicula desea alquilar? \n 1: Avatar: The Way of Water \n 2: Everything Everywhere All At Once \n 3: Puss in Boots : The Last Wish \n 4: The Menu \n ESC: Salir')
  pelicula = parseInt(pelicula);
  if (pelicula === peliculasNl[pelicula -1].id){
    console.log(peliculasNl[pelicula-1])
    canastaDeCompra += peliculasNl[pelicula -1].precio
    textoConfirmacion += '\n' + peliculasNl[pelicula - 1].nombre + ' ';
    textoConfirmacion += '$' + peliculasNl[pelicula - 1].precio + ' ';
    seguirCompra()
  } else if (pelicula === 'ESC'){
    salir()
  }
}

function peliculasClasicos(){
  pelicula = prompt('Que pelicula desea alquilar? \n 1: The Godfather \n 2: The Green Mile \n 3: Top Gun \n 4: Forrest Gump \n ESC: Salir')
  pelicula = parseInt(pelicula);
  if (pelicula === peliculasCls[(pelicula -1)].id){
    console.log(peliculasCls[pelicula-1])
    canastaDeCompra += peliculasCls[pelicula -1].precio
    textoConfirmacion += '\n' + peliculasCls[pelicula - 1].nombre + ' ';
    textoConfirmacion += '$' + peliculasCls[pelicula - 1].precio + ' ';
    seguirCompra()
  } else if (pelicula === 'ESC'){
    salir()
  }
}

function seguirCompra (){
  let postEleccion = prompt('Que desea hacer? \n 1: Agregar Producto \n 2: Finalizar Compra \n ESC: Salir');
  if (postEleccion === '1'){
    compraPeliculas();
  } else if (postEleccion === '2'){
    canastaFinal = canastaDeCompra.toFixed(2);
    alert(textoConfirmacion + '\n TOTAL: $' + canastaFinal);
  } else if (postEleccion === 'ESC'){
    salir ();
  } else {
    console.log('Comando invalido')
    seguirCompra();
  }
}

function salir(){
  canastaDeCompra = 0;
  canastaFinal = 0;
  textoConfirmacion = 'Sus peliculas son: ';
}
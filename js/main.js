//! funciones
function compraPeliculas(){
  genero = prompt('Que genero esta buscando comprar? \n 1: Nuevos Lanzamientos \n 2: Clasicos \n ESC: Salir');
  switch (genero){
    case '1':
      peliculasElegidas = peliculas.filter(i => i.genero === nl);
      peliculasElegidas.forEach(i => mensajeFiltrado += i.id + '. ' + i.nombre + '\n')
      mensajeFiltrado += 'ESC: Salir'
      peliculasParaComprar();
      break;
    case '2':
      peliculasElegidas = peliculas.filter(i => i.genero === cls);
      peliculasElegidas.forEach(i => mensajeFiltrado += i.id + '. ' + i.nombre + '\n')
      mensajeFiltrado += 'ESC: Salir'
      peliculasParaComprar();
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

function peliculasParaComprar(){
  pelicula = prompt(mensajeFiltrado)
  while (pelicula !== 'ESC'){
    pelicula = parseInt(pelicula);
    if (pelicula > peliculasElegidas.length){
      alert('Pelicula no encontrada');
      peliculasParaComprar();
    } else if (pelicula === peliculasElegidas[pelicula -1].id){
      mensajeFiltrado = 'Que pelicula desea alquilar? \n';
      console.log(peliculasElegidas[pelicula-1])
      canastaDeCompra.push(peliculasElegidas[pelicula -1])
      textoConfirmacion += '\n' + peliculasElegidas[pelicula - 1].nombre + ' ';
      textoConfirmacion += '$' + peliculasElegidas[pelicula - 1].precio + ' ';
      seguirCompra();
      return;
    }
  }
}

function seguirCompra (){
  let postEleccion = prompt('Que desea hacer? \n 1: Agregar Producto \n 2: Finalizar Compra \n ESC: Salir');
  if (postEleccion === '1'){
    compraPeliculas();
  } else if (postEleccion === '2'){
    canastaDeCompra.forEach(i => canastaFinal += i.precio)
    alert(textoConfirmacion + '\n TOTAL: $' + canastaFinal.toFixed(2));
    salir();
  } else if (postEleccion === 'ESC'){
    salir ();
  } else {
    alert('Comando invalido')
    seguirCompra();
  }
}

function salir(){
  for (let i = 1; (i <= canastaDeCompra.length) && (i <= peliculasElegidas.length); i++){
    canastaDeCompra.splice(i - 1, canastaDeCompra.length);
    peliculasElegidas.splice(i - 1, peliculasElegidas.length);
  }
  canastaFinal = 0;
  textoConfirmacion = 'Sus peliculas son: ';
}

salir ();
compraPeliculas();
//funciones
function compraPeliculas(){
  genero = prompt('Que genero esta buscando comprar? \n 1: Nuevos Lanzamientos \n 2: Clasicos \n ESC: Salir')
  if (genero === '1' || genero === 'nuevos lanzamientos') {
    let peliculas = prompt('Que pelicula desea alquilar? \n 1: Avatar: The Way of Water \n 2: Everything Everywhere All At Once \n 3: Puss in Boots : The Last Wish \n 4: The Menu \n ESC: Salir');
    switch (peliculas) {
      case '1': //avatar
        precio = 5.99;
        pelicula = 'Avatar: The Way of Water';
        total += precio;
        agregarConfirmacion();
        seguirCompra();
        break;
      case '2': //everything everywhere all at once 
        precio = 5.99;
        pelicula = 'Everything Everywhere All At Once';
        total += precio;        
        agregarConfirmacion ();
        seguirCompra ();
        break;
      case '3': //puss in boots the last wish
        precio = 5.99;
        pelicula = 'Puss in Boots : The Last Wish';
        total += precio;
        agregarConfirmacion ();
        seguirCompra ();
        break;
      case '4': //the menu
        precio = 5.99;
        pelicula = 'The Menu';
        total += precio;
        agregarConfirmacion ();
        seguirCompra ();
        break;
      case 'ESC':
        salir ();
        break;
      default:
        alert('Pelicula no encontrada');
        compraPeliculas();
        break;
    }
  } else if (genero === '2' || genero === 'clasicos'){
    let peliculas = prompt('Que pelicula desea alquilar? \n 1: The Godfather \n 2: The Green Mile \n 3: Top Gun \n 4: Forrest Gump \n ESC: Salir');
    switch (peliculas) {
      case '1': //the godfather
        precio = 2.99;
        pelicula = 'The Godfather';
        total += precio;
        agregarConfirmacion ();
        seguirCompra ();        
        break;
      case '2': //the green mile 
        precio = 2.99
        pelicula = 'The Green Mile'
        total += precio;  
        agregarConfirmacion ();
        seguirCompra();
        break;
      case '3': //top gun
        precio = 2.99
        pelicula = 'Top Gun' 
        total += precio;       
        agregarConfirmacion ();
        seguirCompra ();
        break;
      case '4': //forrest gump
        precio = 3.99
        pelicula = 'Forrest Gump'
        total += precio;
        agregarConfirmacion ();
        seguirCompra ();
        break;
      case 'ESC':
        salir ();
        break;
      default:
        alert('Pelicula no encontrada');
        compraPeliculas();
        break;
    }
  } else if (genero === 'ESC' || genero === 'salir'){
    salir();
  } else {
    alert('Genero Invalido');
    compraPeliculas();
  }

}

function seguirCompra (){
  let postEleccion = prompt('Que desea hacer? \n 1: Agregar Producto \n 2: Finalizar Compra \n ESC: Salir');
  if (postEleccion === '1'){
    compraPeliculas();
  } else if (postEleccion === '2'){
    totalFinal = total.toFixed(2);
    alert(textoConfirmacion + '\n TOTAL: $' + totalFinal);
  } else if (postEleccion === 'ESC'){
    salir ();
  } else {
    console.log('Comando invalido')
    seguirCompra();
  }
}

function salir (){
  textoConfirmacion = 'Sus peliculas son: ';
  total = 0;
}

function agregarConfirmacion (){
  textoConfirmacion += '\n' + pelicula + ' ';
  textoConfirmacion += '$' + precio + ' ';
}

//variables
let genero;
let precio;
let pelicula;
let textoConfirmacion;
let total;
let totalFinal;


//acciones
salir ();
compraPeliculas();
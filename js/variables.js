//! variables
const generos = [];
let peliculas = [], peliculasElegidas = [], canastaDeCompra = []
let  genero, pelicula, canastaFinal = 0, textoConfirmacion = 'Sus peliculas son: ', mensajeFiltrado = 'Que pelicula desea alquilar? \n';
const mainTag = document.getElementById('main__section')
const mainSeleccion = document.querySelector('#main-seleccion');
const filtros = document.forms['filtros'];
const headerIcono = document.querySelector('#header-icono')
const cartNumero = document.querySelector('#cart-numero')
const canastaVisualizar = document.querySelector('.visualizar')
const visualizarPeliculaClass = document.querySelectorAll('.visualizar-pelicula')
const divTotal = document.querySelector('.total')
let visualizado = false;
let buscadorVisualizado = false;
const resultadosBusqueda = document.querySelector('#resultados-busqueda')
const inputBuscador = document.querySelector('#input-buscador')
const clear = document.getElementById('clear')
const clearImg = document.querySelector('#imagen-clear')
let tachitoClear = './imagenes/tachitoClear.svg'
const nombreInput = document.querySelector('#nombre');
const infoTarjetaNombre = document.querySelector('#info-tarjeta-nombre');
const numeroInput = document.querySelector('#numero');
const infoTarjetaNumero = document.querySelector('#info-tarjeta-numero');
const cvcInput = document.querySelector('#CVC');
const cvcOutput = document.querySelector('.CVC-resultado');
const mesInput = document.querySelector('#mes');
const spanMeses = document.querySelector('#span-meses');
const yearInput = document.querySelector('#year');
const spanYear = document.querySelector('#span-years');
const checkoutMain = document.querySelector('.checkout-main');
const compraFinalizadaToggle = document.querySelector('#compra-finalizada-toggle');
const compraFinalizadaSaludo = document.querySelector('#compra-finalizada-saludo');
const compraFinalizadaBtn = document.querySelector('#compra-finalizada-btn');
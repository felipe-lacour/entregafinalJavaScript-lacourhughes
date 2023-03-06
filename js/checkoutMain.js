const checkoutCanasta = document.getElementById('checkout-canasta')
const armadorCanastaCheckout = (i) => {
  canastaFinal += i.precio
  const checkoutCanastaPelicula = document.createElement('div')
  checkoutCanastaPelicula.classList.add('checkout-canasta-pelicula')
  checkoutCanastaPelicula.innerHTML = `
  <div class="checkout-canasta-pelicula-img">
    <div class="visualizar-pelicula-boton"><button class="visualizar-pelicula-boton-elemento" id="${canastaDeCompra.indexOf(i)}"><img src=".${tachitoClear}" id="${canastaDeCompra.indexOf(i)}"/></button></div>
    <img src=".${i.imagen}" alt="${i.nombre}" class="checkout-canasta-pelicula-img-elemento">
  </div>
  <div class="checkout-canasta-pelicula-info">
    <h2>${i.nombre}</h2>
    <h5>${i.genero.nombre}</h5>
    <div class="checkout-canasta-pelicula-info_extra">
      <h6>${i.fecha}</h6>
      <p>$${i.precio}</p>
    </div>
  </div>
  `

  checkoutCanasta.append(checkoutCanastaPelicula);
}

const divTotalCheckout = document.querySelector('.total-checkout')
const armadorTotalCheckout = () => {
  const total = document.createElement('div')
  total.classList.add('total-precio')
  total.innerHTML = `
  <div id="total-canasta-checkout"> 
    <div><h5>TOTAL:</h5></div>
    <div><p>$${canastaFinal.toFixed(2)}</p></div>
  </div>
  `
  console.log('hola')
  divTotalCheckout.append(total)

  botonesCheckoutClear();
}




const botonesCheckoutClear = () => {
  const botonesCheckout = document.querySelectorAll('.visualizar-pelicula-boton-elemento')
  botonesCheckout.forEach(i => {
  i.addEventListener('click', (e)=>{
    let botonIdCheckout = e.target.getAttribute('id')   
    canastaDeCompra.splice(botonIdCheckout, 1)
    console.log(canastaDeCompra)
    if(canastaDeCompra.length === 0){
      localStorageSetter();
      location.href = '../index.html';
  } else{asistenteArmadoCheckout();}
    
  })
})
}
const asistenteArmadoCheckout = () => {
  localStorageSetter();
  checkoutCanasta.innerHTML='';
  divTotalCheckout.innerHTML= '';
  canastaFinal = 0
  canastaDeCompra.forEach(i => armadorCanastaCheckout(i));
  armadorTotalCheckout();
}

canastaDeCompra.forEach(i => armadorCanastaCheckout(i));
armadorTotalCheckout();
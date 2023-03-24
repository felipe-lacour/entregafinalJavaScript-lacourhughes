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
    <h5>${i.genero}</h5>
    <div class="checkout-canasta-pelicula-info_extra">
      <h6>${fechaPelis(i)}</h6>
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
  divTotalCheckout.append(total)

  botonesCheckoutClear();
}




const botonesCheckoutClear = () => {
  const botonesCheckout = document.querySelectorAll('.visualizar-pelicula-boton-elemento')
  botonesCheckout.forEach(i => {
  i.addEventListener('click', (e)=>{
    const botonIdCheckout = e.target.getAttribute('id')   
    canastaDeCompra.splice(botonIdCheckout, 1)
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


const tarjetaDatos = (a, b, c) => {
  a.value = '';
  a.addEventListener('focus', ()=>{
    a.value = '';
    b.innerHTML = c;
  })
  a.addEventListener('input', ()=>{
    if(a.value.length === 0){
      b.innerHTML = c;
    } else {
      b.innerHTML = `${a.value}`;
    }
  })
}

tarjetaDatos(nombreInput, infoTarjetaNombre, `TITULAR DE LA TARJETA`);
tarjetaDatos(numeroInput, infoTarjetaNumero, `XXXX XXXX XXXX XXXX`);
tarjetaDatos(cvcInput, cvcOutput, `CVC`);
tarjetaDatos(mesInput, spanMeses, `MM`);
tarjetaDatos(yearInput, spanYear, `YY`);

const botonAccept = document.querySelector('#accept')

botonAccept.addEventListener('click', () => {
  let valorInputNombre = infoTarjetaNombre.innerHTML, valorInputTarjeta = infoTarjetaNumero.innerHTML, valorCVCInput = cvcOutput.innerHTML, valorSpanMeses = spanMeses.innerHTML, valorSpanYear = spanYear.innerHTML;
  if((valorInputNombre.length > 0 && valorInputNombre !== 'TITULAR DE LA TARJETA')&&(valorInputTarjeta.length > 0 && valorInputTarjeta !== 'XXXX XXXX XXXX XXXX')&&(valorCVCInput.length > 0 && valorCVCInput !== 'CVC')&&(valorSpanMeses.length > 0 && valorSpanMeses !== 'MM')&&(valorSpanYear.length > 0 && valorSpanYear !== 'YY')){
      checkoutMain.style.display = 'none';
      compraFinalizadaSaludo.innerHTML = `${valorInputNombre}, gracias por su compra! Su TOTAL fue de $${canastaFinal.toFixed(2)}.`
      compraFinalizadaToggle.style.display = 'block';      
    }
  })

compraFinalizadaBtn.addEventListener('click', ()=>{
  clearCanastaDeCompra()
  localStorageSetter()
  location.href = '../index.html';
})

canastaDeCompra.forEach(i => armadorCanastaCheckout(i));
armadorTotalCheckout();
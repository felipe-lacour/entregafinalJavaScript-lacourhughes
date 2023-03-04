const localStorageSetter = () => {
  let canastaDeCompraJSON = JSON.stringify(canastaDeCompra)
  localStorage.setItem('canastaDeCompra', canastaDeCompraJSON);
}
let canastaDeCompraDeLS = JSON.parse(localStorage.getItem('canastaDeCompra'))
if(canastaDeCompraDeLS){
  canastaDeCompra = canastaDeCompraDeLS
}


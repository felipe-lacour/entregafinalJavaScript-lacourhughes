const localStorageSetter = () => {
  let canastaDeCompraJSON = JSON.stringify(canastaDeCompra)
  localStorage.setItem('canastaDeCompra', canastaDeCompraJSON);
}

const localStorageGetter = () => {
  let canastaDeCompraDeLS = JSON.parse(localStorage.getItem('canastaDeCompra'))
  if(canastaDeCompraDeLS){
  canastaDeCompra = canastaDeCompraDeLS
}
}
localStorageGetter();



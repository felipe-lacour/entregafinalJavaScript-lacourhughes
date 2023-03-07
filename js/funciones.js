const setBack = () =>{
  cartNumero.style.height = '0'
  cartNumero.style.width = '0'
  cartNumero.innerHTML = ''
  divTotal.innerHTML = `
    <div id="clear"></div>
    <div id="canasta-visualizar" class="visualizar"></div>    
  `
  divTotal.style.height = '0'
  divTotal.style.borderWidth = '0px'
  visualizarPeliculaClass.forEach(i => i.remove())
  canastaFinal = 0;
  localStorageSetter()
}

function clearCanastaDeCompra(){
  while (canastaDeCompra.length > 0){
    canastaDeCompra.pop()
  }
}
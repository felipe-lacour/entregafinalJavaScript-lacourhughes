const cargarPeliculas = () => {
  return new Promise ((resolve, reject) => {
    setTimeout (() =>{
      peliculas.length > 0 ? resolve(peliculas) : reject('No hay peliculas en la base de datos')
    }, 1500)
  })
}
const carteleras = async () => {
  const res = await fetch('./JSON/peliculas.json');
  const data = await res.json();
  data.forEach(i => peliculas.push(i))
}
cargarPeliculas()
  .then((resolve) => {
    resolve.forEach(i => armadorCarteleras(i))
    canastaNotificacion();
    canastaClick();
    canastaDeCompra.forEach(i => armadorCanasta(i));
    armadorTotal();
  })
  .catch((reject) => {
    console.log(reject)
  })
  .finally(()=>{
    loader.style.display = 'none';
  })


carteleras();
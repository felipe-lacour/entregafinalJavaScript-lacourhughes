//! constructor
class Genero {
  constructor(nombre){
    this.nombre = nombre
  }
}

class Pelicula {
  constructor(nombre, precio, fecha, genero, id, imagen, botonID){
    this.nombre = nombre
    this.precio = precio
    this.fecha = fecha
    this.id = id
    this.genero = genero
    this.imagen = imagen
    this.botonID = botonID
  }
}

const nl = new Genero('Nuevos Lanzamientos');
const cls = new Genero('Clasicos');
generos.push(nl, cls)

const avatar2 = new Pelicula('Avatar: The Way of Water', 7.99, 2022, nl, 1, './imagenes/posters/avatar2.webp');
const eeaao = new Pelicula('Everything Everywhere All At Once', 5.99, 2022, nl, 2, './imagenes/posters/eeaao.jpg');
const pussInBoots = new Pelicula('Puss in Boots: The Last Wish', 6.99, 2022, nl, 3, './imagenes/posters/pussinboots.jpeg');
const theMenu = new Pelicula('The Menu', 4.99, 2022, nl, 4, './imagenes/posters/themenu.jpg');
const spiderman3 = new Pelicula('Spider Man: No Way Home', 3.99, 2021, nl, 5, './imagenes/posters/spiderman3.jpg')
const wakandafe = new Pelicula('Black Panther: Wakanda Forever', 6.99, 2022, nl, 6, './imagenes/posters/wakandafe.jpg')

const theGodfather = new Pelicula('The Godfather', 2.99, 1972, cls, 1, './imagenes/posters/thegodfather.jpeg');
const greenMile = new Pelicula('Green Mile', 1.99, 1999, cls, 2, './imagenes/posters/greenmile.jpg');
const topGun = new Pelicula('Top Gun', 2.99, 1986, cls, 3, './imagenes/posters/topgun.jpeg');
const forrestGump = new Pelicula('Forrest Gump', 3.99, 1995, cls, 4, './imagenes/posters/forrestgump.jpg');
const rocky = new Pelicula('Rocky', 1.99, 1984, cls, 5, './imagenes/posters/rocky.jpeg')
const ted = new Pelicula('Ted', 2.99, 2012, cls, 6, './imagenes/posters/ted.jpeg')

peliculas.push(avatar2, eeaao, pussInBoots, theMenu, spiderman3, theGodfather, greenMile, topGun, forrestGump, rocky, wakandafe, ted)

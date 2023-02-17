//! constructor
class Genero {
  constructor(nombre){
    this.nombre = nombre
  }
}

class Pelicula {
  constructor(nombre, precio, fecha, genero, id){
    this.nombre = nombre
    this.precio = precio
    this.fecha = fecha
    this.id = id
    this.genero = genero
  }
}

const nl = new Genero('Nuevos Lanzamientos');
const cls = new Genero('Clasicos');
generos.push(nl, cls)

const avatar2 = new Pelicula('Avatar: The Way of Water', 5.99, 2022, nl, 1);
const eeaao = new Pelicula('Everything Everywhere All At Once', 5.99, 2022, nl, 2);
const pussInBoots = new Pelicula('Puss in Boots: The Last Wish', 5.99, 2022, nl, 3);
const theMenu = new Pelicula('The Menu', 5.99, 2022, nl, 4);
const spiderman3 = new Pelicula('Spider Man: No Way Home', 3.99, 2021, nl, 5)
const invincible = new Pelicula('Invincible', 4.99, 2005, cls, 5);
const theGodfather = new Pelicula('The Godfather', 2.99, 1972, cls, 1);
const greenMile = new Pelicula('Green Mile', 2.99, 1999, cls, 2);
const topGun = new Pelicula('Top Gun', 2.99, 1986, cls, 3);
const forrestGump = new Pelicula('Forrest Gump', 3.99, 1995, cls, 4);
const rocky = new Pelicula('Rocky', 1.99, 1984, cls, 6)

peliculas.push(avatar2, eeaao, pussInBoots, theMenu, spiderman3, theGodfather, greenMile, topGun, forrestGump, invincible, rocky)

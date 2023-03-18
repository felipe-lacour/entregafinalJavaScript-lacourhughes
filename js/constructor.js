//! constructor
class Genero {
  constructor(nombre){
    this.nombre = nombre
  }
}

class Pelicula {
  constructor(nombre, precio, fecha, genero, imagen){
    this.nombre = nombre
    this.precio = precio
    this.fecha = fecha
    this.genero = genero
    this.imagen = imagen
  }
}

const drm = new Genero('Drama');
const cmd = new Genero('Comedia');
const act = new Genero('Accion');
const cncFccn = new Genero('Ciencia Ficcion');
const rmnc = new Genero('Romance');
const thrllr = new Genero('Thriller');
generos.push(drm,cmd,act,cncFccn,rmnc,thrllr)

const avatar2 = new Pelicula('Avatar: The Way of Water', 7.99, DateTime.local(2022, 12, 15), cncFccn, './imagenes/posters/avatar2.webp');
const eeaao = new Pelicula('Everything Everywhere All At Once', 5.99, DateTime.local(2022, 6, 9), cncFccn, './imagenes/posters/eeaao.webp');
const pussInBoots = new Pelicula('Puss in Boots: The Last Wish', 6.99, DateTime.local(2023, 1, 5), cmd, './imagenes/posters/pussinboots.webp');
const theMenu = new Pelicula('The Menu', 4.99, DateTime.local(2022, 11, 18), thrllr, './imagenes/posters/themenu.webp');
const spiderman3 = new Pelicula('Spider Man: No Way Home', 3.99, DateTime.local(2021, 1, 17), act, './imagenes/posters/spiderman3.webp')
const wakandafe = new Pelicula('Black Panther: Wakanda Forever', 6.99, DateTime.local(2022, 11, 11), act, './imagenes/posters/wakandafe.webp')
const theGodfather = new Pelicula('The Godfather', 2.99, DateTime.local(1972, 9, 20), drm, './imagenes/posters/thegodfather.webp');
const greenMile = new Pelicula('Green Mile', 1.99, DateTime.local(1999, 12, 6), drm, './imagenes/posters/greenmile.webp');
const topGun = new Pelicula('Top Gun', 2.99, DateTime.local(1986, 5, 16), act, './imagenes/posters/topgun.webp');
const forrestGump = new Pelicula('Forrest Gump', 3.99, DateTime.local(1994, 10, 6), drm, './imagenes/posters/forrestgump.webp');
const rocky = new Pelicula('Rocky', 1.99, DateTime.local(1977, 1,13), drm, './imagenes/posters/rocky.webp')
const ted = new Pelicula('Ted', 2.99, DateTime.local(2012,9,6), cmd, './imagenes/posters/ted.webp')
const ntngHll = new Pelicula('Notting Hill', 2.99, DateTime.local(1999, 8, 5), rmnc, './imagenes/posters/nottinghill.webp')
const prdNdPrjdc = new Pelicula('Pride and Prejudice', 3.99, DateTime.local(2005), rmnc, './imagenes/posters/prideandprejudice.webp')
const wHmS = new Pelicula('When Harry Met Sally', 1.99, DateTime.local(1989), rmnc, './imagenes/posters/whenharrymetsally.webp')
const wYN = new Pelicula(`What's your number?`, 2.99, DateTime.local(2011), rmnc, './imagenes/posters/whatsyournumber.webp')
const tWS = new Pelicula('The Wedding Singer', 1.99, DateTime.local(1998), rmnc, './imagenes/posters/theweddingsinger.webp')
const ttnc = new Pelicula('Titanic', 2.99, DateTime.local(1997), rmnc, './imagenes/posters/titanic.webp')
const prsnrs = new Pelicula('Prisoners', 3.99, DateTime.local(2013), thrllr, './imagenes/posters/prisoners.webp')
const dntBrth = new Pelicula(`Don't Breathe`, 2.99, DateTime.local(2016), thrllr, './imagenes/posters/dontbreathe.webp')
const bscInstnct = new Pelicula('Basic Instinct', 2.99, DateTime.local(1992), thrllr, './imagenes/posters/basicinstinct.webp')
const getOut = new Pelicula('Get Out', 2.99, DateTime.local(2017), thrllr, './imagenes/posters/getout.webp')
const ftlTrctn = new Pelicula('Fatal Atraction', 2.99, DateTime.local(1987), thrllr, './imagenes/posters/fatalatraction.webp')
const aln = new Pelicula('Alien', 2.99, DateTime.local(1979), cncFccn, './imagenes/posters/alien.webp')
const bckTThFtr = new Pelicula('Back to the Future', 2.99, DateTime.local(1985), cncFccn, './imagenes/posters/backtothefuture.webp')
const edgOfTmrrw = new Pelicula('Edge of Tomorrow', 2.99, DateTime.local(2014), cncFccn, './imagenes/posters/edgeoftomorrow.webp')
const np = new Pelicula('Nope', 2.99, DateTime.local(2022), cncFccn, './imagenes/posters/nope.webp')
const dHrd = new Pelicula('Die Hard', 2.99, DateTime.local(1988), act, './imagenes/posters/diehard.webp')
const rmb = new Pelicula('Rambo', 2.99, DateTime.local(1982), act, './imagenes/posters/rambo.webp')
const mssnMpsbl = new Pelicula('Mission Impossible', 2.99, DateTime.local(1996), act, './imagenes/posters/missionimpossible.webp')
const grwnPs = new Pelicula('Grown Ups', 2.99, DateTime.local(2010), cmd, './imagenes/posters/grownups.webp')
const hppyGlmr = new Pelicula('Happy Gilmore', 2.99, DateTime.local(1996), cmd, './imagenes/posters/happygilmore.webp')
const sprBd = new Pelicula('Superbad', 2.99, DateTime.local(2007), cmd, './imagenes/posters/superbad.webp')
const twntyNJmpStrt = new Pelicula('21 Jump Street', 2.99, DateTime.local(2012), cmd, './imagenes/posters/21jumpstreet.webp')
const shwShnkRdmptn = new Pelicula('Shawshank Redemption', 2.99, DateTime.local(1994), drm, './imagenes/posters/shawshankkredemption.webp')
const hckSwRdg = new Pelicula('Hacksaw Ridge', 2.99, DateTime.local(2016), drm, './imagenes/posters/hacksawridge.webp')

peliculas.push(avatar2, eeaao, pussInBoots, theMenu, spiderman3, theGodfather, greenMile, topGun, forrestGump, rocky, wakandafe, ted, ntngHll, prdNdPrjdc, wHmS, wYN,tWS,ttnc,prsnrs,dntBrth,bscInstnct,getOut,ftlTrctn,aln, bckTThFtr,edgOfTmrrw,np,dHrd,rmb,mssnMpsbl,grwnPs,hppyGlmr,sprBd,twntyNJmpStrt,shwShnkRdmptn,hckSwRdg)




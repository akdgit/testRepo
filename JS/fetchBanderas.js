/*
//PROMESAS
var bInsertar = document.getElementById('insertar');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

  bInsertar.addEventListener('click', function () {
   getPosts()
   .then(data => data.json())
   .then(posts => {
      mostrarDatos(posts);
      return getCountries();
    })
    .then (data => data.json())
    .then (countries => {
      mostrarBanderas(countries);
    })
    .catch(error => {
        mensajes.classList.toggle('hide');
        mensajes.innerHTML = error;
        setTimeout(() => mensajes.classList.toggle('hide'), 6000);
    })
   });  

    function getPosts() {
        return fetch('https://jsonplaceholder.typicode.com/posts');
    }

    function getCountries() {
        return fetch('https://restcountries.eu/rest/v2/all');
    }

    function mostrarBanderas(countries) {
        contBanderas.innerHTML = '';
        countries.map((country,i) => {
            let bandera = document.createElement('img');
            bandera.src = country.flag;
            bandera.width = '20';
            bandera.height = '20';
            contBanderas.appendChild(bandera);
        })
    }

    function mostrarDatos(posts) {
        contBanderas.innerHTML = '';
        posts.map((post, i) => {
            let titulo = document.createElement('h1');
            let contenido = document.createElement('p');
    
            titulo.innerHTML = (i + 1) + " - " + post.title;
            contenido.innerHTML = post.body;
    
            contenedor.appendChild(titulo);
            contenedor.appendChild(contenido);
        })
    }
*/ //descomentar para trabajar con las promesas
    
//POO 
class Productos {
    constructor(numSerie) {
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }
    static get infotienda() { //Static para acceder a ambas clases
        console.log('Producto de la tienda Bebé Paula Inc.')
    }

    set garantia(value) {
        this.tiempoGarantia -= value;
    }

    get garantia() {
        return this.tiempoGarantia;
    }
}


class pantalla extends Productos {
    constructor(numSerie, marca, modelo, pulgadas) {
        super(numSerie)
        this.marca = marca;
        this.modelo = modelo;
        this.pulgadas = pulgadas;
    }

    encendido () {
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} está encendida.`);
    }

    volumen() {
        console.log('El valor se ha modificado');
    }

    info() {
        console.log(`La pantalla con el serial ${this.numSerie} y de marca ${this.marca} de modelo ${this.modelo} es de ${this.pulgadas} pulgadas`);
    }

    set peso(value) {
        this.kgs = value.trim();
    }

    get peso() {
        return this.kgs;
    }
}

const tvSala = new pantalla('007','master', 'oasis', '55');
const tvHabitacion = new pantalla('008','Origin', 'Artemis', '80');
 'use strict';

 const boton = document.querySelector(".boton");
 const video = document.querySelector(".bvideo");
/* EVENTO CLICK CON THIS
    boton.addEventListener('click', function() {
    console.log(this.innerHTML) 
 })  
 
 
           boton.addEventListener('click', () => {
             console.log(this)
             this.location = "http://www.google.com";   
          })
  


//EVENTO CLICK 
 boton.addEventListener('click', function() {
    console.log('El botón se ha pulsado') 
 })  
//EVENTO MOUSEOVER
 boton.addEventListener('mouseover', function() {
     console.log('El puntero está sobre el botón.')
 })
//EVENTO MOUSEOUT
boton.addEventListener('mouseout', function() {
    console.log('El puntero está fuera del botón.')
})


window.addEventListener('keydown', function(event) {
    console.log('Pulsando tecla');
    console.log(String(event.keyCode));
    console.log(String.fromCharCode(event.keyCode))
})

window.addEventListener("keypress", function (event) {
    console.log('Tecla pulsada')
})

window.addEventListener('keyup', function(event) {
    console.log('Tecla liberada.')
})

//Contenido multimedia
const video = document.querySelector(".bvideo");

video.addEventListener('play', function() {
    console.log('El video ha iniciado');
});

video.addEventListener('seeking', function() {
    console.log('Se está buscando en el video', this.currentTime);
});

video.addEventListener('ended', function() {
    console.log('El video ha terminado');
});

//Temporizadores
var temporizador = setInterval(function() {
  setColor();
},2000)


//setTimeout(function() {
  //  setColor();
  //},5000)


function setColor(){
    var pagina=document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor =='blue' ? 'green' : 'blue';
}

function stopChangeColor() {
    clearInterval(temporizador)
}
//Ventanas
//video.addEventListener('ended', function() {
  //  alert('El video ha terminado.');
//});

video.addEventListener('ended', function() {
    let resultado = confirm('¿Desea ver el video nuevamente?');
    console.log(resultado);
      if (resultado) {
          video.play();
      }else {
          window.location='http://www.google.com';
      }
});


video.addEventListener('ended', function() {
    let email = prompt('Escribe tu correo para ver mas contenido', 'email@dominio.com');
    if(email==null || email=="") {
        console.log('Sin datos');
    }else {
        window.location = "https://www.youtube.com/results?search_query=peter+albeiro";
        console.log(email);
    }    
});
//Trabajar con números
var numero = 3.56;    
console.log('number: ', typeof numero, typeof Number(numero));
console.log('parseInt', parseInt(numero));
console.log('parseFloat', Number.parseFloat(numero));
console.log('isNan', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero));

console.log('toExponential: ', numero.toExponential(4));
console.log('toFixed: ', numero.toFixed(0));//COLOCAR 0 PARA REDONDEAR
console.log('toPresicion:', numero.toPrecision(5));
console.log('toString: ', typeof numero.toString());

//Cadenas de texto
var mensaje = '    Estoy aprendiendo javascript y estoy Aprendiendo mucho    ';
var resultado;
resultado = mensaje.match(/aprendiendo/gi); //I-lo hace insensible a mayúsculas y minúsculas
resultado = mensaje.substr(6,11); //6-posición desde donde voy a contar -- 11 - hasta cuantos caracteres va a contar a partir de la posición indicada (6)
resultado = mensaje.substring(6,17);//lo mismo que srt pero cuenta desde el principio de la cadena.
resultado = mensaje.charAt(3); //muestra el caracter que se encuentra en la posición indicada (3) comenzando desde 0
resultado = mensaje.startsWith('Es');
var textoEn = mensaje.indexOf('javascript');
resultado = mensaje.startsWith('ja', textoEn);
resultado = mensaje.endsWith('much'); //saber con qué texto se termina 
resultado = mensaje.includes('javascript'); //si la frase incluye la palabra
resultado = mensaje.includes('javascript', 6);//busca la palabra a partir de la posición indicada
resultado = mensaje.repeat(2); //repetir la frase cuantas veces se indique - útil para pruebas
resultado = mensaje.replace('javascript','a programar'); 
resultado = mensaje.slice(6);//muestra el mensaje desde la posición indicada
resultado = mensaje.slice(6, mensaje.length-32);//Trunca el texto según lo indicado
resultado = mensaje.split(" ");//mete el texti en un  arreglo y lo spera segun lo indicado
resultado = mensaje.trim(); //elimina espacios en blanco antes y después de las cadenas de caracteres - útil para formularios
resultado = mensaje.toLowerCase(); //texti a minúsculas
resultado = mensaje.toUpperCase();
var lenguaje1 = 'javascript';
var lenguaje2 = 'HTML';

var mensaje1 = `Me gusta ${lenguaje1} y su integración con ${lenguaje2}`;
var mensajemultilinea= `
Hola, me gusta
${lenguaje1}, como se
integra con ${lenguaje2} y con
los estilos CSS.
`
console.log(resultado);
console.log(mensaje1);
console.log(mensajemultilinea);


//arrays
var platillos=['papas fritas','hamburguesas','pasta'];
var bebidas = Array("Papelón con limón", "Pepsi", "Chicha");

console.log(platillos);
console.log(bebidas);
console .log('hay ' +platillos.length+' platillos en el menú')
var platillo = platillos[1];
console.log('el platillo seleccionado es: '+platillo);

var menu = [platillos,bebidas];
console.log('Estas son las opciones: '+menu);
console.log(menu[0][2] );

platillos.push("arroz");
console.log('Estas son las opciones: '+menu);

platillos.pop();
console.log('Estas son las opciones: '+menu);

var text=platillos.join(); //deveuelve el arreglo en forma de cadena de texto
console.log(text);
*/

var opciones = 'arroz, pasta, carne';
var platos = null;
platos = opciones.split(',');
console.log(platos);

var platillosHTML = Array.from(document.querySelectorAll('.platillos p'));
console.log(platillosHTML);

var platillo = platillosHTML.map(pla=>pla.textContent);
console.log(platillo);

var equipos = Array.of('Racing', 'Boca', 'Ferro');
equipos.sort();
console.log(equipos);

equipos.reverse();
console.log(equipos);

var [equipo1,equipo2,equipo3] = equipos; //desectructuración de arreglos
console.log(equipo1,equipo2,equipo3);

for (let equipo  in equipos) {
    console.log(equipos[equipo])
}

equipos.forEach( (equipo,i) => console.log(equipo,i));

var eElegido = equipos.find(equipo => equipo == 'Racing');
console.log(eElegido);

var teams = [
    {club: 'Racing' , apodo: 'La Academia', pais: 'Argentina'},
    {club: 'FC Barcelona' , apodo: 'Blaugrana' , pais: 'España'},
    {club: 'Peñarol' , apodo: 'El Carbonero' , pais: 'Uruguay'},
    {club: 'Atlético Nacional' , apodo: 'El Verdolaga' , pais: 'Colombia'},
    {club: 'Santos FC' , apodo: 'Peixe' , pais: 'Brasil'},
    {club: 'Unión de Santa Fe' , apodo: 'El Tatengue' , pais: 'Argentina'},
]

var eEleg = teams.find(equipo => equipo.club == 'Racing');
console.log(eEleg);

var eElegido = equipos.findIndex(equipo => equipo == 'Boca');
console.log(eElegido);

var eElecto = teams.findIndex(equipo => equipo.club == 'Racing');
console.log(eElecto);

var eFiltro = teams.filter(equipo => equipo.pais == 'Argentina');
console.log(eFiltro);

var result = teams.some(equipo => equipo.club == 'Peñarol')
console.log(result);

var result = teams.every(equipo => equipo.club == 'Peñarol') //todos los equipos se llman...
console.log(result);




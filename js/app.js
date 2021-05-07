// Desde ES6
import {} from './events/events.js'; // Carga el archivo y ejecuta todo lo que esta ahi adentro
import UserProfile from './model/user_profile.js';
import Producto from './model/producto.js';

let myApp = $("#app"); // Starting point de un SPA

let myUserProfile = new UserProfile();

myUserProfile.load();

console.log("Mi darkmode es: " + myUserProfile.darkmode);

let myInput = 'n';//prompt("Quiere pasar a darkmode? [S]i o [N]o");

if( myInput.toLowerCase() == "s"){
    myUserProfile.darkmode = true;
    myUserProfile.save();
}

// Datos desde una URL
$("body").prepend('<button id="btn1">Traer datos </button><br><br>');

$("#btn1").click( () => {
    $.get("https://jsonplaceholder.typicode.com/photos", ( res, status) => {
        console.log("Status request is: " + status );
        console.dir(res);
        for (const photos of res) {
            $("body").prepend(`<img src=${photos.thumbnailUrl}>`);
        }
        
    });
});


// Datos desde un JSON local
$("body").prepend('<button id="btn1">Leo datos </button><br><br>');

$("#btn1").click( () => {
    $.getJSON("./data/data.json", ( res, status) => {
        console.log("Status request is: " + status );
        console.dir(res);
        for (const photos of res) {
            $("body").prepend(`<img src=${photos.thumbnailUrl}>`);
        }
        
    });
});



/////////////////////////////////////////////////////////
/// BORRAR DE ACA PARA ABAJO


//////////////////////////////////////
// Javascript Vainilla - YA NO LO USAMOS MAS
////////////////////////////////////////
// Creo elemento
//let myElementP = document.createElement("p");

//myElementP.innerHTML = "<h2> Hola Coderhouse </h2>";

// se lo agrego al buttonlogin
//buttonLogin.appendChild(myElementP);

//////////////////////////////////////
// Ahora lo hago por jQuery
////////////////////////////////////////
//buttonLogin.append("<h2> Hola Coderhouse </h2>");

// Aca busco el elemento <h2> que antes agregue
// Se que es el primer y unico childen del buton
// entonces lo remuevo.
//(buttonLogin.children()[0]).remove();


// Conozco el parent de myElementP
//buttonLogin.removeChild(myElementP);

// Y si no se que se encuentra en buttoLogin?
//myElementP.parentNode.removeChild(myElementP);

let myUserInput = $("#usuario");

// Asi cambio el valor del elemento.
myUserInput.val("HOMERO SIMPSONs");

let myListPersonas = $("#personas");

let personasList = ["HOMERO", "MARGE", "LISA", "BART"];



// Agrego a UL la lista de personas en el array
for (const persona of personasList) {
    let myLi = $("<li>", {
        text: persona
    });

    myLi.click( (events) => console.log("Li presionado"));
 
    //myListPersonas.append("<li >" + persona + "</li>");
    myListPersonas.append(myLi);
}


let myTempObj = {id: 0, marca:"CocaCola", precio:120, inflacion: 1000 } //tramedatos(URL); //

let myProducto = new Producto( myTempObj.id, myTempObj.marca, myTempObj.precio );

localStorage.setItem("producto", JSON.stringify(myProducto));

let myTempObj2 = {id: 0, marca:"Pepsi", precio:120, inflacion: 1000 } //tramedatos(URL); //

let myProducto2 = new Producto( myTempObj2.id, myTempObj2.marca, myTempObj2.precio );

var myCarrito = [] // Que pasa si en lugar de usar un array uso objeto carrito?

let storedCarrito = sessionStorage.getItem("carrito");

if( storedCarrito != null){
    // primero cargo como array

    let tempMyCarrito = JSON.parse(storedCarrito); // Estoy un array de ojbetos que NO son Producto

    for (const producto of tempMyCarrito) {
        let loadedProduct = new Producto(producto.id, producto.marca, producto.precio)
        myCarrito.push(loadedProduct);
    }

} else{
    myCarrito.push(myProducto);
    myCarrito.push(myProducto2);
}
sessionStorage.setItem("carrito", JSON.stringify(myCarrito));


// vamos a pintar un carrito
let myHTMLCarrito = $("#myCarrito");

for (const product of myCarrito) {
    myHTMLCarrito.append("<li>" + product.getHTML() + "</li>");
}
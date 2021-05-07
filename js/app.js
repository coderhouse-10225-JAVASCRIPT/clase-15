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

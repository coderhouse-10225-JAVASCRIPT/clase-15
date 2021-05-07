// Desde ES6
//import {} from './events/events.js'; // Carga el archivo y ejecuta todo lo que esta ahi adentro
import UserProfile from './model/user_profile.js';
import ProductoController from './controller/ProductoController.js';
import ProductoModel from './model/ProductoModel.js';
import ProductoView from './view/ProductoView.js';
import { ErrorComponent } from './components/Error.js';
import { FavouriteComponent } from './components/Favourite.js'
import {parseLocation, findActionByPath, routes } from './routes/router.js';

let myApp = $("#app"); // Starting point de un SPA

let myUserProfile = new UserProfile();

myUserProfile.load();

console.log("Mi darkmode es: " + myUserProfile.darkmode);

let myInput = 'n';//prompt("Quiere pasar a darkmode? [S]i o [N]o");

if( myInput.toLowerCase() == "s"){
    myUserProfile.darkmode = true;
    myUserProfile.save();
}

const app = new ProductoController(new ProductoModel(), new ProductoView());

const router = () => {
    const path = parseLocation();

    const {action = 'error' } = findActionByPath(path, routes) || {};

    // Antes de cambiar de route, limpio la vista
    app.cleanView();

    switch (action) {
        case "agregar":
            app.agregar("#app") // falta definir metodo agregar
            break;
        case "listar":
            app.listar("#app") // falta definir metodo list
            break;
        case "buscar":
            app.buscar("#app")
        break;
        case "favorito":
            FavouriteComponent("#app");
        break;
        default:
            ErrorComponent("#app");
            break;
    }
}

$( window ).on( 'load', () => {
    router();
});

$( window ).on('hashchange', () =>{
    router();
})
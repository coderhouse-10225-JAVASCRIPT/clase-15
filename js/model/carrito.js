export default class Carrito {
    constructor(){
        this.lista = []
    }

    agregarProducto(producto){
        this.lista.push(producto);
    }
}
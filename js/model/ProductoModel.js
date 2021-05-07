import Producto from "./producto";

export default class ProductoModel {
    constuctor() {
        const productos = JSON.parse(localStorage.getItem("productos")) || [];
        this.productos = productos.map(producto => new Producto(producto));    
    }

    guardarProductos() {
        localStorage.setItem('productos', JSON.stringify(this.productos));
    }

    agregarProducto(producto) {
        this.productos.push(new Producto(producto));
        this.guardarProductos();
    }
}
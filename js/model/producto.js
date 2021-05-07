export default class Producto {
    // constructor(obj) // otra opcion
    constructor(id, marca, precio){
        this.id = id;
        this.marca = marca;
        this.precio = precio;
    }

    valorMasIva() {
        return this.precio * 1.21;
    }

    // Esto seria nuestra representacion visual del componente
    getHTML() {
        let html = `<input value="${this.id}" type=hidden>
        <h1> ${this.marca} : $ ${this.precio} </h1>
        <img src='https://www.w3schools.com/images/lamp.jpg'>
        <button class="btnProducto">Comprar</button>`
       // return "<input value="+ "<h1>" + this.marca + ": $" + this.precio +"</h1>"+"<img src='https://www.w3schools.com/images/lamp.jpg'>" + '<button class="btnProducto">Comprar</button>';
       return html;
    }
    
}

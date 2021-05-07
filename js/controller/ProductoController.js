export default class ProductoController {
    constructor(productoModel, productoView ){
        this.productoModel = productoModel;
        this.productoView = productoView;
        this.productoView.listarProducto("#pag1", this.productoModel.productos , (event) => {
            let hijos = $(event.target).parent().children();
            this.productoModel.agregarProducto({
                id: this.productoModel.productos.length + 1,
                nombre: hijos[1].value,
                precio: hijos[2].value,
            })
        })
    }

    cleanView() {
        $("#app").empty();
    }

    agregar(){

    }

    buscar() {

    }

    listar(){

    }
}

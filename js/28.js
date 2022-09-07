 // Classes

class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    returnPrecio(){
        return `El precio es de: $${this.precio}`;
    }

    consolePrecio(){
        console.log(this.precio);
    }
}

const producto = new Producto("Monitor curvo de 49", 800);
const producto1 = new Producto("Laptop", 500);


//Herencia:

class Libro extends Producto{
    constructor(nombre, precio, isbn){
    super(nombre,precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }

    obtenerPrecio(){
        super.consolePrecio();
        console.log(' Y si hay en existencia');
    }

}

const libro = new Libro('JavaScript la Revolucion', 128, '123123123123');

//Impresion:
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto.formatearProducto());

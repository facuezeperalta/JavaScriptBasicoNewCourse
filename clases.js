//esto es un molde, no esta instanciado nada.
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona("Facundo",29);

persona1.saludar();




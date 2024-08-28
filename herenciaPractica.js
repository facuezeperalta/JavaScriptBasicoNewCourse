class Animal{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo= tipo;
    }
    emitirSonido(){
        console.log("El animal emite un sonido.");
    }
}
class Perro extends Animal{
    constructor(nombre,tipo,raza){
        super(nombre,tipo); //indico que extiendo de la clase animal, si queremos hacer referencia a nombre y tipo pertenecen a la clase de Animal
        this.raza = raza; //es de la misma clase Perro
    }
    emitirSonido(){ //sobre escribimos el método heredado de la clase animal.
        console.log(`${this.nombre} ladra.`);
    }
    correr(){ //método propio
        console.log(`${this.nombre} corre alegremente.`);
    }
}

const perro1 = new Perro("Fideo","Perro","Mestizo");
console.log(perro1);

perro1.correr();
perro1.emitirSonido();

//generando prototipos:
perro1.nuevoMetodo = function(){
    console.log("Este es un método nuevo de esta instancia");
}

perro1.nuevoMetodo();

Perro.prototype.segundoMetodo = function(){
    console.log("Segundo método");
}

perro1.segundoMetodo();

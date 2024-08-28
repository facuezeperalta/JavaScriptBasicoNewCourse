function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
}

//para usarla debemos usar una instancia
const persona1 = new Persona("Facundo","Peralta",29);
const persona2 =  new Persona("Ezequiel","Peralta",30);

console.log(persona1);
console.log(persona2);

Persona.prototype.telefono = "555-555-555";
persona1.nacionalidad = "Argentino";
console.log(persona1);
console.log(persona2);

Persona.prototype.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre},${this.apellido}`);
}

persona1.saludar();
persona2.saludar();
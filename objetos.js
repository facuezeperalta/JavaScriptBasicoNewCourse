const persona = {
    nombre : "Facundo",
    edad :29,
    direccion: {
        calle: "Av.San martin",
        altura: 187,
        cuidad: "Rio ceballos",
        provincia: "Cordoba"
    },
    saludar(){
        console.log(`Hola! Soy ${persona.nombre}, tengo ${persona.edad}`);
    }
}

persona.telefono = "354312312312";

console.log(persona.telefono);

delete persona.telefono

console.log(persona);
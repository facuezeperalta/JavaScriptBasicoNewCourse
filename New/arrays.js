
// declaración de array con paréntesis.
const fruits = Array("Apple","Orange","Banana");

console.log(fruits);

//Mutabilidad

fruits.push("Grapes");

console.log(fruits);

// Inmutabilidad.
const frutas2 = fruits.concat(["Mandarina","kiwi"]);
console.log("------")
console.log(fruits)
console.log(frutas2);

// practica sumar todos los elementos del array

const numerosparasumar = [1,2,3,4,5];
let sum = 0;

for(let i = 0; i < numerosparasumar.length;i++){
    sum += numerosparasumar[i];
}

console.log(sum);

//metodos que modifican el array original MUTABILIDAD.
//push.
const countries = ["USA","Canada","UK"];
const newCountries = countries.push("Argentina","Asutralia");

console.log(countries);

//.pop elimina el ultimo elemento del array y nos devuelve el valor.
const removeCountry = countries.pop();
console.log(countries);
console.log(removeCountry); //devuelve el valor que fue borrado del array.
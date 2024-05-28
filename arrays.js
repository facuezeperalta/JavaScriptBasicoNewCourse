let frutas =["Banana","Manzana","Uva","Pera"];

console.log(frutas);

const recipeIngredients = ["flour",
    true,
    2,
    {
        ingredient : "Milk",
        quantity: '1 cup'
    },
    false
]

console.log(recipeIngredients)

//mutability:
frutas.push("Sandia");
console.log(frutas)


//inmutability:
const newFrutas = frutas.concat(['manzana verde','tomate']);
console.log(frutas)
console.log(newFrutas)

//Checking arrays with Array.isArray()

const isArray = Array.isArray(frutas);
console.log(isArray);


//Ejercicio práctico: sumar todos los elementos de un array:

const numbersArray = [1,2,3,4,5]
let sum = 0
for(i =0; i < numbersArray.length;i++){
    sum += numbersArray[i]
}

console.log(sum)
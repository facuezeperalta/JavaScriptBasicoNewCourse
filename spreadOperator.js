//Spread operator
// copying arrays
const arrayOriginal = [1,2,3,4,5];
const copyOfArray= [...arrayOriginal];
console.log(arrayOriginal);
console.log(copyOfArray);

//2 combining arrays.

const array1 = [1,2,3];
const array2= [4,5,6];

const combinedArrays = [...array1,...array2];

console.log(array1);
console.log(array2);
console.log(combinedArrays);

//crear arrays con elementos adicionales

const arrayBase = [1,2,3];
const arrayWithAditionalElements = [...arrayBase,15,30];

console.log(arrayBase);
console.log(arrayWithAditionalElements);

//pasar elemento a funciones

function sum(a,b,c){
    return a + b + c;
}

const numbers = [5,5,2];

const result = sum(...numbers);

console.log(result);


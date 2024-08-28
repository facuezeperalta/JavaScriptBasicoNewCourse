//filter
const numbersToFilter = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = numbersToFilter.filter(number => number % 2 === 0);
console.log(numbersToFilter);
console.log(evenNumbers);

//reduce.

const numberToReduce =[1,2,3,4,5];
const sum = numberToReduce.reduce((acumulador,currentValue) =>  acumulador + currentValue,0)

console.log(numberToReduce);
console.log(sum);

//Caso 2 de reduce. para contar frecuencia de las palabras
const words = ["Hola","Pato","Hola","Facundo","Peralta","pato"];
const wordFrecuency = words.reduce((acumulator,currentValue) => {
    if(acumulator[currentValue]){
        acumulator[currentValue]++;
    }else{
        acumulator[currentValue] = 1
    }
    return acumulator;
},{})


console.log(wordFrecuency);


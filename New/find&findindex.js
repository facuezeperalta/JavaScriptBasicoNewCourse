//Métodos que no mutan el array original.
//iteran sobre el array.


//find().

const multipleOf5 = [5,10,15,20,25];


const firstNumberGreaterThanTen = multipleOf5.find(number => number >10);

console.log(multipleOf5);
console.log(firstNumberGreaterThanTen);

//findIndex()
const randomNumbers = [2,14,50,20,14,50,150]

const indexNumber = randomNumbers.findIndex(number => number>1);

console.log(randomNumbers);
console.log(indexNumber);
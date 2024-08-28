const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map(num =>num * num);

//devuelve el array original y un array nuevo con la modificación realizada por el map.
console.log(numbers);
console.log(squareNumbers);


//método for each.

const colors = ["red","green","blue"];
const iteratedColors = colors.forEach(color => console.log(color));

console.log(colors);
console.log(iteratedColors);

//convertir de F a Cº.

const temperaturaEnF= [32,68,95,104,212];
const tempCelsius = temperaturaEnF.map(tempF => (5/9) * (tempF -32));

console.log(`Temperatura en grados Fahrenheit: ${temperaturaEnF}`);
console.log(`Temperatura en grados Celsius: ${tempCelsius}`);


// sumar todos los elementos de un array:

const arrayNumbers = [1,2,3,4,5];
let sumaOfArray = 0;

arrayNumbers.forEach(n => {
    sumaOfArray += n
})


console.log(`Numeros de entrada ${arrayNumbers}`);
console.log(sumaOfArray);
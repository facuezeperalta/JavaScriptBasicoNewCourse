//objeto
const listaDeCompras = {
    manzana : 5,
    pera : 3,
    naranja: 4,
    uva: 1,
}

for (fruta in listaDeCompras){
    console.log(fruta); //imprime las propiedades del objeto.
}

console.log("---------");

for (frutaValor in listaDeCompras){
    console.log(`${frutaValor} : ${listaDeCompras[frutaValor]}`);
}
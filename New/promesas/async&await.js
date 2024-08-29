/* function fetchData(){
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

fetchData(); */ 

async function fetchData(){
    try{
        let response = await fetch('https://rickandmortyapi.com/api/character'); //hago fetch de la api, await indica que es asincrónica.
        let data = await response.json(); //convierto la data en json para poder ser leído en consola, también usamos el await para dejarlo en espera que se complete la petición.
        console.log(data); // imprimo la data.
    }
    catch (error){
        console.log(error);
    }
}

fetchData();

const urls = ["https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"]


async function NewFetchData(){
    try{
        for await (let url of urls){
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    } catch(error){
        console.log(error);
    }
}



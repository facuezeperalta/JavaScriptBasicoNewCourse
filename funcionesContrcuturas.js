const personalizedMessage = () => 'Good Bye';

function Rocket(name,ownmessage){
    this.name = name
    this.launchmessage = ownmessage
}

const falcon9 = new Rocket('Falcon 9',personalizedMessage); //aca creamos un instancia de ese objeto y le damos los parámetros correspondientes.
const falconHeavyRocket = new Rocket('Falcon Heavy Rocket','Flacon heave launched');

console.log(falcon9.name);
console.log(falcon9.launchmessage());


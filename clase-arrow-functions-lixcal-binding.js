const greeting = function(name){
    return `Hi, ${name}`
}

const newGreeting = (name) =>{return `Hi, ${name}`};

//Arrow function - impicit return

const newGreetingImplicit = name => `Hi, ${name}`; // cuando tenemos un solo parámetro no hace falta ponerle parétesis.


//lexical binding.

const fictionalCharacter = {
    name:'Walter White',
    messageWithTraditionalFunction: function(message){
        console.log(`${this.name} says: ${message}`);
    }
}
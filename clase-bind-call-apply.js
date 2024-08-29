const owner ='Facu';
const address = 'Cordoba';

function dogGreeting(owner,address){
    console.log([`Hi,I'm ${this.dogName} and I live with ${owner} at ${address}` ]);
}

const newHouse = {
    dogName: 'Fideo'
}

dogGreeting.call(newHouse,owner,address);

const ownerData = [owner,address];


console.log('----------------')
dogGreeting.apply(newHouse,ownerData);

console.log('------------------')
const bindingWithBind = dogGreeting.bind(newHouse,owner,address);
bindingWithBind();


// Arrow Function 


const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let operationsuccessful = true;
        if(operationsuccessful){
            resolve(`La operación se completo exitosamente!`);
        }else{
            reject(`La operación falló`)
        }
    },2000)
})

promise
    .then((succesMessage)=>{
        console.log(succesMessage);
    })//este método se ejecuta cuando la promesa se resuelve.
    .catch((errorMessage) =>{
        console.log(errorMessage);
    })
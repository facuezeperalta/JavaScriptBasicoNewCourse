/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
{
    username: "andres",
    password: "123",
},
{
    username: "caro",
    password: "456",
},
{
    username: "mariana",
    password: "789",
},
];

const usersTimeline = [
{
    username: "estefany",
    timeline: "Me encata Javascript!",
},
{
    username: "oscar",
    timeline: "Bebeloper es lo mejor!",
},
{
    username: "mariana",
    timeline: "A mi me gusta más el café que el té",
},
{
    username: "andres",
    timeline: "Yo hoy no quiero trabajar",
},
];

//pido usuario y contraseña.
const user = prompt("Ingresa tu usuario: ");
const password = prompt ("Ingresa tu contraseña: ");

function usuarioExiste(user,password){
    for(let i=0; i < usersDatabase.length;i++){
        if(usersDatabase[i].username === user && usersDatabase[i].password === password){
            return true;
        }    
    }
    return false;
}

function getUserTimeLine(username){
    for(let i=0;i < usersTimeline.length;i++){
        if(usersTimeline[i].username === username){
           return console.log(usersTimeline[i].timeline)
        }
    }
    return console.log("El usuario no tiene timeline");
    
}

function signIn(userName,password){
    if(usuarioExiste(userName,password)){
        alert(`Bienvenido a tu cuenta ${userName} .`)
        getUserTimeLine(userName);
    }else{
        console.log("Usuario o contraseña incorrectos!");
    }
}



signIn(user,password);






/* const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");

function usuarioExistente(username, password) {
for (let i = 0; i < usersDatabase.length; i++) {
    if (
    usersDatabase[i].username === username &&
    usersDatabase[i].password === password
    ) {
    return true;
    }
}
return false;
}

function signIn(username, password) {
if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
} else {
    alert("Uuups, usuario o contraseña incorrectos!");
}
}

signIn(username, password); */
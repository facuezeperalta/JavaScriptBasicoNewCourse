// Con esta función traigo las cosas.
/* fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error)); */
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method,url,data){
  return fetch(url,{
    method:method,
    body:JSON.stringify(data),
    headers:{
      "Content-Type": "application/json",
    }
  }).then((response) => {return response.json()}); 
}

async function fetchPost (){
  const responseData = await sendHTTPRequest("GET","https://jsonplaceholder.typicode.com/posts");
    console.log(responseData);
    const listOfPosts = responseData; //creo una variable para guardar los post, así queda intacta la respuesta original.
    for (const post of listOfPosts) {
      const postContainer = document.createElement("article");
      postContainer.id = post.id;
      postContainer.classList.add("post-item");
  
      const title = document.createElement("h2");
      title.textContent = post.title;
  
      const body = document.createElement("p");
      body.textContent = post.body;
  
      const button = document.createElement("button");
      button.textContent = "DELETE Content";
  
      postContainer.append(title);
      postContainer.append(body);
      postContainer.append(button);
  
      listElement.append(postContainer);
    }
}

async function createPost(title,content){
  const userId = Math.random();
  //generamos la estructura de lo que se va a enviar al servidor.
  const post = {
    title: title,
    body: content,
    userId : userId,
  };
  //hacemos el request:
  sendHTTPRequest("POST","https://jsonplaceholder.typicode.com/posts",post);

}


fetchButton.addEventListener("click",fetchPost);

form.addEventListener("click",(event) =>{
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;
  createPost(title,content);
})




/* 
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData;

  for (const post of listOfPosts) {
    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    listElement.append(postContainer);
  }
}

fetchButton.addEventListener("click", fecthPosts);

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;

  createPost(title, content);
});
 */
let queryString = location.search;
let personaje = new URLSearchParams(location.search);
let Id = personaje.get("id");
let url = `https://rickandmortyapi.com/api/character/${id}`;
let id = personaje

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(`el error es: ${error}`);
})
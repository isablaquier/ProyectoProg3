
let formulario = document.querySelector(".formulario");
let buscador = document.querySelector(".buscador");
//Buscador
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    if (buscador.value==""){
        return alert("¡No se puede realizar una búsqueda con el campo vacío!")
        }
    else if (buscador.value.length<3){
        return alert("¡Se debe realizar una búsqueda con al menos 3 caracteres!")
    }
    else {
        this.submit()
    }

})

//

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get('resultado');
console.log(terminoBuscado)

let linkArtist=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${terminoBuscado}`
let linkTrack=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${terminoBuscado}`
let linkAlbum=`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${terminoBuscado}`

let sectionBusqueda = document.querySelector('.content_search');
let termino = document.querySelector(".termino")

termino.innerHTML = `<p> Termino buscado : ${terminoBuscado}</p>`

//Artistas 
let articleArtist = document.querySelector('.articleArtist');
fetch(linkArtist)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let info = data.data
        let busquedaArtist =""
        console.log(data);
        if (info.length>0){
            for (let i=0; i<info.length; i++) {
            busquedaArtist += `<article class="articleArtist"> 
            <a class='buscar' href="./detalleartistas.html?id=${info[i].id}">${info[i].name}</a>
            </article>`
        }
        articleArtist.innerHTML = busquedaArtist
        } 
        else if(info.length==0){
                busquedaArtist =`<article class="articleArtist">
                <h1 class="h1_sr">No hay resultados coincidentes</h1>
            </article>`
            articleArtist.innerHTML = busquedaArtist
        }     

    })
    .catch(function (error) {
        console.log(error);
    })


//Tracks
let articleTrack = document.querySelector('.articleTrack');
fetch(linkTrack)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        let info = data.data
        let articleTrack = document.querySelector('.articleTrack');
        let busquedaTrack =""
        console.log(data);
        if (info.length>0){
        for (let i=0; i<info.length; i++) { 
            busquedaTrack += `<article class= "articleTrack"> 
            <a class='buscar' href="./detail-track.html?id=${info[i].id}">${info[i].title}</a>
            </article>`

            }
        articleTrack.innerHTML= busquedaTrack
        } 
        else if(info.length==0){
            busquedaTrack =`<article class="articleTrack">
            <h1 class="h1_sr">No hay resultados coincidentes</h1>
        </article>`
    articleTrack.innerHTML = busquedaTrack
    } 
      
    })
    .catch(function (error) {
        console.log(error);
    })

//Albums 
let articleAlbum = document.querySelector('.articleAlbum');  
fetch(linkAlbum)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let info = data.data
        let articleAlbum = document.querySelector('.articleAlbum');
        let busquedaAlbum =""
        console.log(data);
        if (info.length>0){
        for (let i=0; i<info.length; i++) {
            busquedaAlbum += `<article> 
           <a class='buscar' href="./detalledeldisco.html?id=${info[i].id}">${info[i].title}</a>
            </article>`
            }
        articleAlbum.innerHTML= busquedaAlbum
        } 
        else if(info.length==0){
            busquedaAlbum =`<article class="articleAlbum">
            <h1 class="h1_sr">No hay resultados coincidentes</h1>
        </article>`
    articleAlbum.innerHTML = busquedaAlbum
    }  

    sectionBusqueda.style.display="flex"
    sectionBusqueda.style.flexDirection = "row"
    sectionBusqueda.style.justifyContent = "space-between"
        
    })
    .catch(function (error) {
        console.log(error);
    })
     
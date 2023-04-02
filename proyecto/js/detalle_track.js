let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idTrack = qsToObject.get("id");
console.log(idTrack);


let urlDetalle = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${idTrack}`


fetch(urlDetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        info= data;
        let album = document.querySelector(".trackAlbum");
        let foto = document.querySelector(".fotoAlbum");
        let artista_track= document.querySelector(".trackArtist");
        let track= document.querySelector(".track");
        let duracion = document.querySelector(".trackduration");
        let player = document.querySelector(".iframe")

        album.innerHTML= info.title
        foto.src= info.album.cover;
        artista_track.innerHTML= ` Artista: <a href="detalleartistas.html?id=${info.artist.id}">${info.artist.name}</a>`
        track.innerHTML= `Album: <a href="detalledeldisco.html?id=${info.album.id}">${info.album.title}</a>`;
        duracion.innerHTML += `Duración: ${info.duration} segundos`;
        player.src =`https://widget.deezer.com/widget/dark/track/${idTrack}`;
        

        
    // Favoritos
    let cancion = document.querySelector(".cancion");
    let cancionesFavoritas = [];
    cancion.addEventListener("click", function(evento){
        evento.preventDefault()
        if(cancionesFavoritas.includes(idTrack)){
            let sacarCancion = cancionesFavoritas.indexOf(idTrack)
            cancionesFavoritas.splice(sacarCancion, 1);
            cancion.innerText = "Agregar canción a mi playlist"
        }
        else{
            cancionesFavoritas.push(idTrack);
            cancion.innerText= "Sacar canción de mi playlist"
        }

        let cancionesFavoritasString = JSON.stringify(cancionesFavoritas)
        localStorage.setItem("cancionesFavoritas", cancionesFavoritasString); 
    })
    let recuperoLista = localStorage.getItem("cancionesFavoritas");
    if(recuperoLista){
        let cancionesArray = JSON.parse(recuperoLista)
        cancionesFavoritas = cancionesArray
    }

    })
    .catch(function(error){
        console.log(error)
    })


//Buscador
let formulario = document.querySelector(".formulario");
let buscador = document.querySelector(".buscador");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    if (buscador.value==""){
        return alert("¡No se puede realizar una búsqueda con el campo vacío!")
        }
    else if (buscador.value.length<3){
        return alert("¡Se debe realizar una búsqueda con al menos 3 caracteres!")
    }
    else{
        this.submit()
    }

})
let recuperoStorge = localStorage.getItem('cancionesFavoritas');
recuperoStorgeToArray = JSON.parse(recuperoStorge);

let section = document.querySelector('.ar_pl');
let contenidoSection = " "

for(let i=0; i< recuperoStorgeToArray.length; i++){
    
    url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${recuperoStorgeToArray[i]}`
    console.log(url);
    fetch(url)
         .then(function(response){
           return response.json()
      })
         .then(function(data){
            console.log(data);
            let info = data;
            contenidoSection += `<article class="ar_pl" >
            <a class="pl_dt" href="detail-track.html?id=${info.id}">${info.title}  /</a>
            <a class="pl_dt" href="detalleartistas.html?id=${info.artist.id}">${info.artist.name}</a>
            </article>`
            section.innerHTML =  contenidoSection  

        let padding = document.querySelector('.art_pl')

            section.style.display='flex'
            section.style.flexDirection = 'column'
            section.style.margin='20px'
            padding.style.padding=''


  
      })
      .then(function(error){
            console.log(error);
      })

}

section.innerHTML = contenidoSection;


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
    else {
        this.submit()
    }
        
    

})
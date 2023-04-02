let queryString = location.search; 
let qsToObject = new URLSearchParams(queryString); 
let idDetalle = qsToObject.get('id'); 



let urlDetalle= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idDetalle}/artists/`                 

let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idDetalle}`



https://cors-anywhere.herokuapp.com/


fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let nombre = document.querySelector(".ffcul2");
        nombre.innerHTML = `<strong>${data.name}</strong>`;
   
    })

    .catch(function(error){
        console.log(error);
    })

//ARTISTAS//


fetch(urlDetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

         info = data.data;
        let section = document.querySelector('.section2ff');
        let title = document.querySelector('.pff');
        let image = document.querySelector('.imagenff');

        title.innerText = info.title;
        image.src= info.picture; 
        
        let articles = "";


        for(let i=0 ; i<info.length; i++){
            
            articles += `<article class="article2ff">
            <img class="imagenff" src="${data.data[i].picture_big}" height= "100px" width="100px"  >
            <p class="pff"><a class="pff" href="./detalleartistas.html?id=${data.data[i].id}">${data.data[i].name}</a></p>
                </article>`
       
        }  

        section.innerHTML = articles;
        section.style.display = "flex";
        section.style.flexDirection = "row";
    })
    
    
    .catch(function(error){
        console.log(error);
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
    else {
        this.submit()
    }

})
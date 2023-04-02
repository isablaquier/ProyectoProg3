let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"


fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.data
        let section = document.querySelector(".ffsection");
        let articles = "";

        for(let i=0 ; i<info.length ; i++){
            
            articles += `<article class= "ffarticle">
                            <p class="pgeneros">Nombre: ${data.data[i].title}</p>
                            <img class="image" src="${data.data[i].pictures}" alt="">
                            <a class="ffcul" href="detalledelgenero.html?id=${data.data[i].id}">${data.data[i].name}</a>
                        </article>`

        }

        
        
        section.innerHTML = articles;

        

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
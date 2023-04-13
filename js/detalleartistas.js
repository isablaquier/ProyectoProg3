let queryString= location.search;
let qsToObject = new URLSearchParams(queryString);
let idArtist = qsToObject.get("id");
console.log(idArtist);

let link = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${idArtist}/albums`
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${idArtist}`;

fetch(url)
     .then(function(response){
       return response.json()
     })
     .then(function(data){
      console.log(data);
      let info=data;
      let span = document.querySelector('.a_ad');
      let back = document.querySelector('.detalleBack');
      back.style.backgroundImage= `url(${data.picture_medium})`;

      span.innerHTML=`<h3 class="h3_ad">${info.name} </h3>
      <img class="img_red" src="${info.picture_big}" alt="">
      <p class="p_da"> Albums </p>`
    })
     .catch(function(error){
     console.log(error)
})


fetch(link)
     .then(function(response){
       return response.json()
     })
     .then(function(data){
      console.log(data);
      let info=data.data;
      let span = document.querySelector('.a_ad');
      
      for(let i=0; i<5;i++){
        span.innerHTML  +=`<a class="p_da" href="./detalledeldisco.html?id=${info[i].id}"> ${info[i].title} </a>`
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
    else {
        this.submit()
    }

})
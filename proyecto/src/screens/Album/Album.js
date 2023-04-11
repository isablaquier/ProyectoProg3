import React, { Component } from 'react';

class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id, 
            info: '',
            esFavorito :false
        }
    }

    componentDidMount() {
      
      console.log(this.state.id,'Fedeeefnjdnshjfdbsnhfdbhfdsbdfshhjbjbsjfbhjdfsbjkdsf')
      //Busca la data
      fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
            .then(response => response.json())
            .then(data => this.setState({ info: data })) //la guardas en el estado en la propiedad info del estado
            .catch(error => console.log('El error es' + error))
            
            //Dpendiendo si esta o no en favoritos queremos que diga quitar o agregar
            
            //agarramos la lista de favoritos
            let storage = localStorage.getItem('favoritosAlbum')
            let storageAArray = JSON.parse(storage)
        
            if(storageAArray !== null){
              let estaEnElArray = storageAArray.includes(this.state.info.id)
              //Esta en favoritos? Si esta pongamos la prop fav del estado en true -> quitar
              if(estaEnElArray){
                this.setState({
                  esFavorito: true
                })
              }
            }
        
    }

    
      anhadirFav(id){
        let storage = localStorage.getItem('favoritosAlbum')
        //Sino esta esta en favoritos agregala 
        if (this.state.esFavorito == false) {
          //si la lista esta vacia agregamos el id asi nomas
            if(storage === null){
                let idEnArray = [id]
                let arrayAString = JSON.stringify(idEnArray)
                localStorage.setItem('favoritosAlbum', arrayAString)
              } else {  //sino esta vacia nos traemos lo que sta y lo agregamos sobre eso
                let deStringAArray = JSON.parse(storage) 
                deStringAArray.push(id)
                let arrayAString = JSON.stringify(deStringAArray)
                localStorage.setItem('favoritosAlbum', arrayAString)
              }
          //actualizamos el estado
              this.setState({
                esFavorito: true
              })  
        }
        else{ //si esta en favoritos entonces la quitamos
            let storageAArray = JSON.parse(storage)
            //quitamos el id utilizando el metodo filter del array
            let filtro = storageAArray.filter((elm)=> elm !== id)
            let filtroAString = JSON.stringify(filtro)
            localStorage.setItem('favoritosAlbum', filtroAString)
            //actualizamos el estado
            this.setState({
                esFavorito: false
              })
          
            }
        
      }
    render() {
        if (this.state.info) {
            console.log(this.state.info);
            return (
                <div>
                  
                    <img src={this.state.info.cover_medium} alt={this.state.info.title} />
                    <h2>{this.state.info.title}</h2>
                    <h3>{this.state.info.artist.name}</h3>
                    <h4>{this.state.info.genres.data[0].name}</h4>
                    <h5>Fecha de publicacion: {this.state.info.release_date}</h5>
                    <ul>
                        {this.state.info.tracks.data.map(track => {
                            return (
                                <li>{track.title}</li>
                            )
                        })}
                    </ul>
                    <button className= 'boton' onClick={item => this.anhadirFav(this.state.info.id)}> {this.state.esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos' } </button>
                </div>
            )
        } else {
            <h4>Cargando...</h4>
        }
    }
}

export default Album

import React, { Component } from 'react';

class Album extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id, //id: this.props.match.params.id
            // album: ''
        }
    }

    componentDidMount() {
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com//album/${this.state.id}`)
            .then(response => response.json())
            .then(data => this.setState({ info: data })) //album: data
            .catch(error => console.log('El error es' + error))
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
    
        if(storageAArray !== null){
          let estaEnElArray = storageAArray.includes(this.props.info.id)
          if(estaEnElArray){
            this.setState({
              esFavorito: true
            })
          }
        }
      }
    
      anhadirFav(id){
        let storage = localStorage.getItem('favoritos')
        //Sino esta esta en favoritos agregala 
        if (this.state.esFavorito == false) {
            if(storage === null){
                let idEnArray = [id]
                let arrayAString = JSON.stringify(idEnArray)
                localStorage.setItem('favoritosAlbum', arrayAString)
                
          
              } else {
                let deStringAArray = JSON.parse(storage) 
                deStringAArray.push(id)
                let arrayAString = JSON.stringify(deStringAArray)
                localStorage.setItem('favoritosAlbum', arrayAString)
              }
          
              this.setState({
                esFavorito: true
              })  
        }
        else{
            let storageAArray = JSON.parse(storage)
            let filtro = storageAArray.filter((elm)=> elm !== id)
            let filtroAString = JSON.stringify(filtro)
            localStorage.setItem('favoritosAlbum', filtroAString)
            this.setState({
                esFavorito: false
              })
          
            }
        
      }
    render() {
        if (this.state.album) {
            console.log(this.state.album);
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
                    <button className= 'boton' onClick={item => this.anhadirFav(this.props.info.id)}> {this.state.esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos' } </button>
                </div>
            )
        } else {
            <h4>Cargando...</h4>
        }
    }
}

export default Album

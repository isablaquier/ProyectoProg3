import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './styles.css'


class ListadoAlbum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.info ,//por la linea 36 del ContenedorListado
            texto: 'Ver más',
            clase: 'hidden',
            
        }
    }

    cambiarTexto(){
        if(this.state.texto === 'Ver más'){
            this.setState({
                texto: 'Ver menos',
                clase:'show'
            })
        } else {
            this.setState({
                texto: 'Ver más',
                clase:'hidden'
            })
        }}

        componentDidMount(){
            let storage = localStorage.getItem('favoritos')
            console.log(this.props, 'props');
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
        return (
            <section className="content">
            <article>
              {console.log(this.props.info,'jajaj')}
                <Link to = {`/unalbum/id/${this.props.info.id}`}>
                    <img src={this.props.info.cover}></img>
                </Link>
                <div>
                    <h3>{this.props.info.title}</h3>
                    <p className={this.state.clase}>{`artista: ${this.props.info.artist}, explicit lyrics: ${this.props.info.explicit_lyrics}`}</p>
                    <a onClick={() => this.cambiarTexto()}>{this.state.texto}</a>

                    <button className= 'boton' onClick={item => this.anhadirFav(this.props.info.id)}> {this.state.esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos' } </button>
                </div>
            </article>
            </section>
        )
    }
}
export default ListadoAlbum
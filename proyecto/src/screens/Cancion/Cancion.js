import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'



export default class Cancion extends Component {
    constructor (props){
        super(props) 
        this.state = {
            data:props, 
            id: props.match.params.id,

        }

    } 

    componentDidMount(){
        console.log(this.state);
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
        .then(data => data.json())        
        .then( info =>{
            this.setState({info: info}, console.log(this.state.info));
            console.log(this.state);
        })

    }

    anhadirFav(id){
        let storage = localStorage.getItem('favoritos')
        //Sino esta esta en favoritos agregala 
        if (this.state.esFavorito == false) {
            if(storage === null){
                let idEnArray = [id]
                let arrayAString = JSON.stringify(idEnArray)
                localStorage.setItem('favoritosCancion', arrayAString)
                console.log('favoritosCancion');
          
              } else {
                let deStringAArray = JSON.parse(storage) 
                deStringAArray.push(id)
                let arrayAString = JSON.stringify(deStringAArray)
                localStorage.setItem('favoritosCancion', arrayAString)
              }
          
              this.setState({
                esFavorito: true
              })  
        }
        else{
            let storageAArray = JSON.parse(storage)
            let filtro = storageAArray.filter((elm)=> elm !== id)
            let filtroAString = JSON.stringify(filtro)
            localStorage.setItem('favoritosCancion', filtroAString)
            this.setState({
                esFavorito: false
              })
          
            }
        
      }
    render() {
        console.log(this.state)
        return(
            this.state.info ? 

            <article className='container'>
                <Link to={`/unalbum/id${this.state.info.album.id}`}></Link>
                <h4 className='body_track'>{this.state.info.title}</h4>
                <p className='body_track'> {this.state.info.artist.name} </p>
                <p className='body_track'> {this.state.info.album.title} </p>
                <img className='imagen' src={this.state.info.album.cover_medium} />

                <iframe src={this.state.info.preview}/>
              
                <a onClick={()=> this.cambiarTexto()}className='more'>{this.state.texto}</a> 
                <section className='extra'>
                </section>
                <button className= 'boton' onClick={item => this.anhadirFav(this.state.info.id)}> {this.state.esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos' } </button>
                </article>
            : ""
            )

  }
}

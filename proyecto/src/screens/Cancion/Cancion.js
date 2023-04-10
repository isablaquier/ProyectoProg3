import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cancion extends Component {
    constructor (props){
        super(props) 
        this.state = {
           data:props.info, 
           id: props.match.params.id,

        }

    } 

    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.data.id}`)
        .then(data => data.json())
        .then( info => this.setState({info: info}))
    }

    anhadirFav(id){
        let storage = localStorage.getItem('favoritos')
    
        if(storage === null){
          let idEnArray = [id]
          let arrayAString = JSON.stringify(idEnArray)
          localStorage.setItem('favoritos', arrayAString)
    
        } else {
          let deStringAArray = JSON.parse(storage) 
          deStringAArray.push(id)
          let arrayAString = JSON.stringify(deStringAArray)
          localStorage.setItem('favoritos', arrayAString)
        }
    
        this.setState({
          esFavorito: true
        })
      }
      
    
      sacarFav(id){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
        let filtro = storageAArray.filter((elm)=> elm !== id)
        let filtroAString = JSON.stringify(filtro)
        localStorage.setItem('favoritos', filtroAString)
    
        this.setState({
          esFavorito: false
        })
    
    
      }
    render() {

        return(
            <article>
                <Link to={`/unalbum/id${this.state.info.data.id}`}></Link>
                <h4>{this.state.info.data.title}</h4>
                <p className={this.state.clase}>{this.state.info.descripcion}</p>
                <img src={this.state.info.md5_image} />
                <a onClick={()=> this.cambiarTexto()}className='more'>{this.state.texto}</a> 
                <section className='extra'>
                </section>
                <button className= 'boton' onClick={item => this.anhadirFav()}>Añadir a Favoritos</button>
                <button className= 'boton' onClick={item => this.sacarFav()}> Eliminar a Favoritos</button>
                </article>
    
            )
    
  }
}

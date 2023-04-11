import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

class ListadoMusica extends Component {
    constructor (props){
        super(props) 
        this.state = {
           data:props.info,
            texto: 'Ver más',
            clase: 'hidden',
            info:[],
            esFavorito: false
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
        }
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
        else{
            let storageAArray = JSON.parse(storage)
            let filtro = storageAArray.filter((elm)=> elm !== id)
            let filtroAString = JSON.stringify(filtro)
            localStorage.setItem('favoritos', filtroAString)
            this.setState({
                esFavorito: false
              })
          
            }
        
      }
      
    

    render(){
        return(
            <section className= 'content'>
        <article>
            <Link to={`/unalbum/id${this.props.info.id}`}></Link>
            <Link to={`/cancion/id/${this.props.info.id}`}>{this.props.info.title}</Link>
            <p>{this.props.info.artist.name}</p>
            <a onClick={()=> this.cambiarTexto()}>{this.state.texto}</a>
            <br>
            </br>
            <p className={this.state.clase}> Duración: {this.props.info.duration} minutos</p>
            <img src={this.props.info.album.cover}/>
            
            <section className='extra'>
            </section>
            <br></br>
            <button className= 'boton' onClick={item => this.anhadirFav(this.props.info.id)}> {this.state.esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos' } </button>
            </article>
            </section>

        )
}
}
export default ListadoMusica
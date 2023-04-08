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
    addFavourites(){
        if(localStorage.getItem('favoritos')){
            let info = this.state.data
            let favoritos = JSON.parse(localStorage.getItem('favoritos'))
            favoritos.push(info)
            let arrayString= JSON.stringify(favoritos)
            localStorage.setItem('favoritos',arrayString)
            console.log(localStorage.getItem('favoritos'))
        }else if(!localStorage.getItem('favoritos')){
            let favoritos = [];
            let info= this.state.data
            favoritos.push(info)
            let arrayString= JSON.stringify(favoritos)
            localStorage.setItem('favoritos',arrayString)

            console.log(localStorage.getItem('favoritos'))
        }
       
    }
    removeItem(){

        if(localStorage.getItem('favoritos')){
            let info= this.state.data
            let favoritos = JSON.parse(localStorage.getItem('favoritos'))
            let favoritosRemove= favoritos.filter(canFav => canFav.title !== info.title)
 if(favoritos.length ==  favoritosRemove.length){
    alert('No tienes estas cancion en favoritos')
}else {
    let favoritosRemoveString = JSON.stringify(favoritosRemove)
    localStorage.setItem('favoritos', favoritosRemoveString)

}
        }
    }

    render(){
        return(
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
            <button className= 'boton' onClick={item => this.addFavourites()}>Añadir a Favoritos</button>
            <button className= 'boton' onClick={item => this.removeItem()}> Eliminar a Favoritos</button>
            </article>

        )
}
}
export default ListadoMusica
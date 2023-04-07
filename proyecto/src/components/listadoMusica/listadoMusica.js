import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

class ListadoMusica extends Component {
    constructor (props){
        super(props) 
        this.state = {
           data:props.infoCancion,
            texto: 'Ver más',
            clase: 'hidden',
           
        }

    }


    cambiarTexto(){
        if(this.state.texto === 'Ver mas'){
            this.setState({
                texto: 'Ver menos',
                clase:'show'
            })
        } else {
            this.setState({
                texto: 'Ver mas',
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
        }else if(!localStorage.getItem('favoritos')){
            let favoritos = [];
            let info= this.state.data
            favoritos.push(info)
            let arrayString= JSON.stringify(favoritos)
            localStorage.setItem('favoritos',arrayString)
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
            <h4>{this.props.info.title}</h4>
            <p className={this.props.info.clase}>{this.props.info.descripcion}</p>
            <img src={this.props.info.album.cover} />
            <a onClick={()=> this.cambiarTexto()}className='more'>{this.props.info.texto}</a> 
            <section className='extra'>
            </section>
            <button className= 'boton' onClick={item => this.addFavourites()}>Añadir a Favoritos</button>
            <button classNamw= 'boton' onClick={item => this.removeItem()}> Eliminar a Favoritos</button>
            <p className='delete'>Borrar</p>
            </article>

        )
}
}
export default ListadoMusica
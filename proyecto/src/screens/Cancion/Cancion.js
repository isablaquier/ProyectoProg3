import React, { Component } from 'react'

export default class Cancion extends Component {
    constructor (props){
        super(props) 
        this.state = {
           data:props.info,
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
    render() {

        return(
            <article>
                <Link to={`/unalbum/id${this.state.info.data.id}`}></Link>
                <h4>{this.state.info.title}</h4>
                <p className={this.state.clase}>{this.state.info.descripcion}</p>
                <img src={this.state.info.md5_image} />
                <a onClick={()=> this.cambiarTexto()}className='more'>{this.state.texto}</a> 
                <section className='extra'>
                </section>
                <button classNAME= 'boton' onClick={item => this.addFavourites()}>Añadir a Favoritos</button>
                <button classNAME= 'boton' onClick={item => this.removeItem()}> Eliminar a Favoritos</button>
                </article>
    
            )
    
  }
}

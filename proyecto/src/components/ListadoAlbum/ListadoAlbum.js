import React, { Component } from "react";
import './styles.css'


export default class ListadoAlbum extends Component {
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

    addFavourites() {
        if (localStorage.getItem('favoritos')) {
            let info = this.state.data
            let favoritos = JSON.parse(localStorage.getItem('favoritos'))
            favoritos.push(info)
            let arrayString = JSON.stringify(favoritos)
            localStorage.setItem('favoritos', arrayString)
            console.log(localStorage.getItem('favoritos'))
        } else if (!localStorage.getItem('favoritos')) {
            let favoritos = [];
            let info = this.state.data
            favoritos.push(info)
            let arrayString = JSON.stringify(favoritos)
            localStorage.setItem('favoritos', arrayString)

            console.log(localStorage.getItem('favoritos'))
        }

    }
    removeItem() {

        if (localStorage.getItem('favoritos')) {
            let info = this.state.data
            let favoritos = JSON.parse(localStorage.getItem('favoritos'))
            let favoritosRemove = favoritos.filter(canFav => canFav.title !== info.title)
            if (favoritos.length == favoritosRemove.length) {
                alert('No tienes estas cancion en favoritos')
            } else {
                let favoritosRemoveString = JSON.stringify(favoritosRemove)
                localStorage.setItem('favoritos', favoritosRemoveString)

            }
        }
    }

    render() {
        return (
            <section className="content">
            <article>
                <div>
                    <img src={this.state.data.cover}></img>
                </div>
                <div>
                    <h3>{this.state.data.title}</h3>
                    <p className={this.state.clase}>{`artista: ${this.state.data.artist.name}, explicit lyrics: ${this.state.data.explicit_lyrics}`}</p>
                    <a onClick={() => this.cambiarTexto()}>{this.state.texto}</a>

                    <button className='boton' onClick={item => this.addFavourites()}>Añadir a Favoritos</button>
                    <button className='boton' onClick={item => this.removeItem()}> Eliminar de Favoritos</button>
                </div>
            </article>
            </section>
        )
    }
}
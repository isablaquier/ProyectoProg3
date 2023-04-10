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
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com//album/${this.state.id}`)
            .then(response => response.json())
            .then(data => this.setState({ info: data })) //album: data
            .catch(error => console.log('El error es' + error))
    }

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
                    <button className='boton' onClick={item => this.addFavourites()}>Añadir a Favoritos</button>
                    <button className='boton' onClick={item => this.removeItem()}> Eliminar de Favoritos</button>
                </div>
            )
        } else {
            <h4>Cargando...</h4>
        }
    }
}

export default Album

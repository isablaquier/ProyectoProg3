import React, { Component } from 'react';

import ContenedorGenero from "../ContenedorGenero/ContenedorGenero"

class ListadoGenero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            generos: [],
        }
    }
 /* hice cosas que estan a medias
    componentDidMount()
    {
        fetch(`https://thingproxy.freeboard.io/fetch/https://developers.deezer.com/api/explorer`)
        .then(response => response.json())
        .then(data=>this.setState(
            {
                generos: data.results,
            }
        ))
        .catch(error => console.log('El error fue' + error))
    } */



    render() {
        return (
            <React.Fragment>
             
            </React.Fragment>
        )
    }
}

export default ListadoGenero;
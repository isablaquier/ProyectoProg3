import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./styles.css"

const opciones = [
    {
        nombre: 'Home',
        path: '/'
    },
    {
        nombre:'Favoritos',
        path: '/favoritos'
    },
    {
        nombre:'VerTodasCanciones',
        path:'/vertodasCanciones'
    },
    {
        nombre: 'VerTodosAlbumes',
        path: '/vertodosAlbumes'
    }
]

class Header extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return(
            <nav className= 'nav'>
               <img className="logo" src="/img/logo.png" alt="logo"></img>
                {opciones.map((elm, idx) => 
                    <Link key={idx} to={elm.path }>
                        {elm.nombre }
                    </Link>
                )
            }
            </nav>
            
        )
    }
}

export default Header
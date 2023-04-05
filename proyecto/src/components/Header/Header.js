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
        nombre:'Chart 2023',
        path:'/chart-2023'
    },
    {
        nombre: 'Generos',
        path: '/generos'
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
               <img className="logo" src="./img/logo.png" alt="logo"></img>
                {opciones.map((elm, idx) => <li className = 'content_nav a'>
                    <Link to={elm.path }>
                        {elm.nombre }
                    </Link>
                </li>)
            }
            </nav>
            
        )
    }
}

export default Header
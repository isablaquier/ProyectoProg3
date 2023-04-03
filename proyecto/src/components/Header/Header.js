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
            <nav>
<<<<<<< HEAD
                <img src= "./public/img/logo.png" alt="logo" />
=======
               <img className="header" src="./img/logo.png" alt="logo"></img>
>>>>>>> 7482476498ab310ce141de2134503648b9b8a1a3
                {opciones.map((elm, idx) => <li>
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
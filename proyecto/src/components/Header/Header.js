import React, { Component } from "react";
import {Link} from 'react-router-dom';

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
                <img> </img>
                {opciones.map((elm, idx) => <li>
                    <Link to={elm.path}>
                        {elm.nombre}
                    </Link>
                </li>)
            }
            </nav>
            
        )
    }
}

export default Header
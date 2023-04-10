import React, {Component} from 'react';
import ListadoMusica from '../ListadoMusica/ListadoMusica';
import VerTodasCanciones from '../../screens/VerTodasCanciones/VerTodasCanciones';
import ListadoAlbum from '../ListadoAlbum/ListadoAlbum';
import {Link} from 'react-router-dom'

class ContenedorListadoAlbum extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className= 'content'>
                <section>
                    <h2>Albums</h2>
                    <Link to='/vertodosÁlbumes'> 
                <p>Ver Todas</p>
            </Link>
                {
                    this.props.albums.map((album, i) =>
                    <article>
                        <ListadoAlbum
                    info = {album}
                    key={i}
                    />
                    </article>
                    
                    )
                }
                </section>
                </section>
        )
    }
}
export default ContenedorListadoAlbum
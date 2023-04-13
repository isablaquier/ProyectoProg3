import React, {Component} from 'react';
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
                    <Link to='/vertodosAlbumes'> 
                <p>Ver Todas</p>
            </Link>
                {
                    this.props.data.length <= 0 ?
                    <h1>Cargando...</h1>:
                    this.props.data.map((album, i) =>
                    <article key={i}>
                        <ListadoAlbum
                    info = {album}
                    
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
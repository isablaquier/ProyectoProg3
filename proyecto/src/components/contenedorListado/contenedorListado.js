
import React, {Component} from 'react';
import ListadoMusica from '../ListadoMusica/ListadoMusica';
import './styles.css'
import VerTodasCanciones from '../../screens/VerTodasCanciones/VerTodasCanciones';
import ListadoAlbum from '../ListadoAlbum/ListadoAlbum';
import {Link} from 'react-router-dom'

class ContenedorListado extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <section className="content">
                <section>
                <h2>Canciones</h2>
                <Link to='/vertodasCanciones'> 
                <p>Ver Todas</p>
                </Link>
                {
                    this.props.data.map((track, i) =>
                    <article>
                        <ListadoMusica
                    info = {track}
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
export default ContenedorListado
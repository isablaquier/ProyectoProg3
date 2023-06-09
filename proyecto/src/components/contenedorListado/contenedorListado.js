
import React, {Component} from 'react';
import ListadoMusica from '../ListadoMusica/ListadoMusica';
import './styles.css'
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
                {console.log(this.props.data, 'dataa')}
                </Link>
                {
                    this.props.data.length < 0 ?
                    <h1>Cargando..</h1> :
                    this.props.data.map((track, i) =>
                    {return(
                        <article key={i}>
                            {console.log(track, 'isa')}
                        <ListadoMusica
                    info = {track}
                    
                    />
                    </article>
                    )}
                    
                    )
                }
                </section>

            </section>  


        )
    }


}
export default ContenedorListado

import React, {Component} from 'react';
import ListadoMusica from '../ListadoMusica/ListadoMusica';
import './styles.css'
import VerTodasCanciones from '../../screens/VerTodasCanciones/VerTodasCanciones';

class ContenedorListado extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <section className="content">
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


        )
    }


}
export default ContenedorListado
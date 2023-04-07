
import React, {Component} from 'react';
import ListadoMusica from '../ListadoMusica/listadoMusica';
import './styles.css'

class ContenedorListado extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <section className="content">
                {
                    this.props.data.map((track, idx) =>
                    <article>
                        <ListadoMusica
                    info = {track}
                    key={idx}
                    />
                    </article>
                    
                    )
                }
            </section>  


        )
    }


}
export default ContenedorListado
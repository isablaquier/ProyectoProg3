
import React, {Component} from 'react';
import ListadoMusica from '../ListadoMusica/ListadoMusica';
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
                    />
                    </article>
                    
                    )
                }
            </section>  


        )
    }


}
export default ContenedorListado
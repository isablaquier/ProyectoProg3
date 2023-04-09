
import React, {Component} from 'react';
import ListadoMusica from '../ListadoMusica/ListadoMusica';
import './styles.css'
import VerTodasCanciones from '../../screens/VerTodasCanciones/VerTodasCanciones';
import ListadoAlbum from '../ListadoAlbum/ListadoAlbum';

class ContenedorListado extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <section className="content">
                <section>
    
                {
                    this.props.tracks.map((track, i) =>
                    <article>
                        <ListadoMusica
                    info = {track}
                    key={i}
                    />
                    </article>
                    
                    )
                }
                </section>

                <section>
                    <h2>Albums</h2>
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
export default ContenedorListado
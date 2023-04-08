import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import ListadoMusica from '../../components/listadoMusica/listadoMusica';
import ContenedorListado from '../../components/ContenedorListado/ContenedorListado';
//import Buscador from '../../components/Buscador/Buscador';
//import Header from '../../components/Header/Header';
import VerTodasCanciones from '../VerTodasCanciones/VerTodasCanciones';
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            albums:[],
            tracks:[]
        }
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(res => res.json())
        .then(data => this.setState({
            tracks: data.tracks.data
        }))
        .catch(err => console.log()) // el segundo fetch con la otra lista

        /*fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks')
        .then(res => res.json())
        .then(data => this.setState({
           tracks: data.tracks.data
        })) */
    }
    render(){
        console.log(this.state.tracks)
        return (
            <>

            <section className="content">
            <h3 className="h3_index">Canciones</h3>
            {
            this.state.tracks.length < 0 ?
            <h3>Estoy trayendo la data</h3> :    
            <section className="canciones">
                 <Link to='/vertodasCanciones'> 
                <p>Ver Todas</p>
            </Link>
                <ContenedorListado data={this.state.tracks}/>   
                  
            </section>
            }
        </section>
            
  
        {/* <section className="content">                                    
            <h3 className="h3_index">Géneros</h3>
            <Link to= '/veertodasGenero'> 
                <p>Ver Todas</p>
            </Link>
            
            {
            this.state.tracks.length < 0 ?
            <h3>Estoy trayendo la data</h3> :    
            <section className="canciones">
                <ContenedorListado data={this.state.tracks}/>      
            </section>
            }
        </section>  */}

                    
            </>
        )
    }
}


export default Home;


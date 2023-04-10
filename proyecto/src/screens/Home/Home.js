import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//import ListadoMusica from '../../components/listadoMusica/listadoMusica';
import ContenedorListado from '../../components/ContenedorListado/ContenedorListado';
//import Buscador from '../../components/Buscador/Buscador';
//import Header from '../../components/Header/Header';
//import VerTodasCanciones from '../VerTodasCanciones/VerTodasCanciones';
import ContenedorListadoAlbum from '../../components/ContenedorListadoAlbum/ContenedorListadoAlbum';
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            albums:[],
            tracks:[]
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=20')
        .then(res => res.json())
        .then(data => this.setState({
            tracks: data.data
        }, ()=> console.log(this.state.tracks)))
        .catch(err => console.log()) // el segundo fetch con la otra lista

        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=9')
        .then(res => res.json())
        .catch(err => console.log())
        .then(data => this.setState({
           albums: data.data
        })) 
    }
    render(){
        console.log(this.state.albums)
        return (
            <>

            <section>
            {
            this.state.tracks.length === 0 ?
            <h3>Cargando...</h3> :    
            <section className="canciones">    
               <ContenedorListado data={this.state.tracks} />
               
                <ContenedorListadoAlbum albums={this.state.albums} />      
            </section>
            
            }
            </section>

                                       
            </>
        )
    }
}


export default Home;


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
            tracks:[],
            resultadosDeBusqueda:[],
            mensaje:'',
            valor:''
        }
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=20')
        .then(res => res.json())
        .then(data => this.setState({
            tracks: data.data
        }, ()=> console.log(this.state.tracks)))
        .catch(err => console.log()) // el segundo fetch con la otra lista

        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=20')
        .then(res => res.json())
        .catch(err => console.log())
        .then(data => this.setState({
           albums: data.data
        })) 
    }
    buscadorP(event) {
        event.preventDefault();
        if (this.state.valor === '') {
            this.setState({
                mensaje: 'No has escrito nada'
            })
        } else {
            fetch(`https://api.deezer.com/search?q=${this.state.valor}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data,'buscador');
                    this.setState({
                        resultadosDeBusqueda: data.data
                    });
                    if (data.results.length === 0) {
                        this.setState({
                            mensaje: 'No se enontraron resultados'
                        })

                    }

                })
                .catch(error => console.log(error))
        }
    }

    controlarCambios(event) {
        this.setState(
            {
                valor: event.target.value,
                mensaje: '',
                resultadosDeBusqueda: []
            },
            () => console.log(event.target.value));
    }
    render(){
        console.log(this.state.albums)
        return (

            <>
           <div className="buscador-home">
                    <h2>Busca acá:</h2>
                    <form onSubmit={(event) => this.buscadorP(event)}>
                        <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                        <button type="submit">Buscar</button>
                    </form>
                    <p>{this.state.mensaje}</p>
                </div>
            <section>
            {
            this.state.tracks.length === 0 ?
            <h3>Cargando...</h3> :    
            <section className="canciones">  
             <div>
             <h3>Resultados de Busqueda</h3>
             {console.log(this.state.resultadosDeBusqueda, 'asdasd')}
             <ContenedorListado  data={this.state.resultadosDeBusqueda} />)
                </div> 
               <ContenedorListado data={this.state.tracks} />
               
                <ContenedorListadoAlbum data={this.state.albums} />      
            </section>
            
            }
            </section>

                                       
            </>
        )
    }
}


export default Home;


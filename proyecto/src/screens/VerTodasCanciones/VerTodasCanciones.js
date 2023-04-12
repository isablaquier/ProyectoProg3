import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Buscador from '../../components/Buscador/Buscador';
import ContenedorListado from '../../components/ContenedorListado/ContenedorListado';

class VerTodasCanciones extends Component {
    constructor(props){
        super(props)
        this.state={
            tracks:[],
            info:[],
            offset:10,
            index:0,
            backup: []
        }

    }
    actualizadorDeEstado(data){
        this.setState({
            tracks:data
        })
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=10&offset=${this.state.offset}&index=${this.state.index}`)
        .then(res => res.json())
        .then(data => this.setState({
            tracks: data.data,
            backup: data.data,
            index: this.state.index + 10
        }, ()=> console.log(this.state.tracks)))
        .catch(err => console.log())
    }

    llamarALaApi(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=10&offset=${this.state.offset}&index=${this.state.index}`)
        .then(res => res.json())
        .then(data => this.setState({
            tracks: this.state.tracks.concat(data.data),
            index: this.state.index + 10

        }))
        .catch(err => console.log())
        
    }
        
              
        
    render(){
        return(
            <>
            {
            this.state.tracks.length === 0 ?
            <h3>Cargando...</h3> :  
            <>
            <h1>Ver Todas</h1>
            
            <ContenedorListado data={this.state.tracks}/>
            <button onClick={()=> this.llamarALaApi()}>Cargar más información</button>
            </>
            } 
        
            </>
            
        )
    }

}

export default VerTodasCanciones

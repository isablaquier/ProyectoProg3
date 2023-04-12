import React, {Component} from 'react';
import ContenedorListado from '../../components/ContenedorListado/ContenedorListado';
import Buscador from '../../components/Buscador/Buscador';
import ContenedorListadoAlbum from '../../components/ContenedorListadoAlbum/ContenedorListadoAlbum';
class VerTodosAlbumes extends Component {
    constructor(props){
        super(props)
        this.state={
            albums:[],
            info:[],
            esFavorito: false,
            offset:10,
            index:0,
            backup: []
        }
        

    }
    actualizadorDeEstado(data){
        this.setState({
            albums:data
            
        })
    }
    
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=10&offset=${this.state.offset}&index=${this.state.index}`)
        .then(res => res.json())
        .then(data => this.setState({
            albums: data.data,
            backup: data.data,
            index: this.state.index + 10
        }))
        .catch(err => console.log())} 
        
        
    llamarALaApi(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?limit=10&offset=${this.state.offset}&index=${this.state.index}`)
        .then(res => res.json())
        .then(data => this.setState({
            albums: this.state.albums.concat(data.data),
            index: this.state.index + 10

        }))
        .catch(err => console.log())
        
    }
              
        
    render(){
        return(
            <>
            {
            this.state.albums.length === 0 ?
            <h3>Cargando...</h3> :  
            <>
            <h1>Ver Todas</h1>
           
            <ContenedorListadoAlbum data={this.state.albums}/>
            <button onClick={()=> this.llamarALaApi()}>Cargar más información</button>
            </>  
            }
            </>
            
        )
    }

}

export default VerTodosAlbumes

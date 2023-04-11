import React, {Component} from 'react';
import ContenedorListado from '../../components/ContenedorListado/contenedorListado';
import MasInfo from '../../components/MasInfo/MasInfo';
class VerTodosAlbumes extends Component {
    constructor(props){
        super(props)
        this.state={
            albums:[],
            info:[],
            esFavorito: false
        }

    }
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums?index=0&limit=9')
        .then(res => res.json())
        .then(data => this.setState({
            albums: data.data
        }))
        .catch(err => console.log())} 
        
              
        
    render(){
        return(
            <>
            {
            this.state.albums.length === 0 ?
            <h3>Cargando...</h3> :  
            <>
            <h1>Ver Todas</h1>
            <p onClick={()=> <MasInfo/>}>Cargar más información</p>
            <ContenedorListado data={this.state.tracks}/>
            </>  
            }
            </>
            
        )
    }

}

export default VerTodosAlbumes

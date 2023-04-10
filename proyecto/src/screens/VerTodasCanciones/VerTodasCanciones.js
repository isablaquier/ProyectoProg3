import React, {Component} from 'react';
import ContenedorListado from '../../components/ContenedorListado/ContenedorListado';
import MasInfo from '../../components/MasInfo/MasInfo';
class VerTodasCanciones extends Component {
    constructor(props){
        super(props)
        this.state={
            tracks:[],
            info:[],
            offset:10
        }

    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=10&offset=${this.state.offset}`)
        .then(res => res.json())
        .then(data => this.setState({
            tracks: data.data
        }, ()=> console.log(this.state.tracks)))
        .catch(err => console.log())
    }
    
    traerMas(){
        this.setState({
            offset: this.state.offset + 10
        }, () => this.llamarALaApi())
    }

    llamarALaApi(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=10&offset=${this.state.offset}`)
        .then(res => res.json())
        .then(data => this.setState({
            tracks: this.state.tracks.concat(data.data)
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
            <p onClick={()=> this.llamarALaApi}>Cargar más información</p>
            <ContenedorListado data={this.state.tracks}/>
            </>
            } 
        
            </>
            
        )
    }

}

export default VerTodasCanciones

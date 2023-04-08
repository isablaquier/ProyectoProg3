import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ContenedorListado from '../../components/ContenedorListado/ContenedorListado';
import MasInfo from '../../components/MasInfo/MasInfo';
class VerTodasCanciones extends Component {
    constructor(props){
        super(props)
        this.state={
            tracks:[],
            info:[]
        }

    }
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
        .then(res => res.json())
        .then(data => this.setState({
            tracks: data.tracks.data
        }))
        .catch(err => console.log())} 
        
              
        
    render(){
        return(
            <>
            <h1>Ver Todas</h1>
            <a onClick={()=> <MasInfo/>}><h2>Cargar más información</h2></a>
            <ContenedorListado data={this.state.tracks}/>

            
            </>
            
        )
    }

}

export default VerTodasCanciones
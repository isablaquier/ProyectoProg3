import React, {Component} from 'react'
import ContenedorListado from '../../components/ContenedorListado/ContenedorListado'
class Favoritos extends Component {
    constructor(props){
super(props)
this.state={
    favoritos:[]
}
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let favoritos = JSON.parse(storage)
        this.setState({favoritos: favoritos})

        
       
    }
    render(){
        
            if(this.state.favoritos.length > 0){
                return (  <>
                <ContenedorListado data={this.state.favoritos}/>
                </>)
            }
          else{
            return(
                <h1> No tienes canciones en Favoritos</h1>
            )
          }      
        
           
    }
}

export default Favoritos
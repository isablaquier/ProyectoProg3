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
        let Array = []
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
          
        //Recorro lista de Favoritos
        let listaFavoritos = JSON.parse(storage) 
        console.log(listaFavoritos,'lista')
        listaFavoritos.map((id)=>{
            //Llamo a cada uno de los ids

            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
            .then(data => data.json())
            .then( info => {
                //Guardo la info en un array
                 let data = info //Te te esta guardon un objeto con toda la info
                 Array = this.state.favoritos
                 Array.push(data)
                this.setState({Favoritos:Array})
                console.log(this.state.favoritos,'fede')                
            })
        
        })

        }
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
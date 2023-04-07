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
        
        if(this.state.favoritos.length >0){

            let storage = localStorage.getItem('favoritos')
            if(storage !==null){
                let storageAArray = JSON.parse(storage)
                Promise.all(
                    storageAArray.map(id => {
                        return(
                            fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks`)
                            .then(resp => resp.json())
                            .then(data => data)
                        )
                    })
                )
                .then(data => this.setState({
                    favoritos: data
                }))
                .catch(err => console.log(err))
            }

        }
       
    }
    render(){
        
            if(this.state.favoritos.length > 0){
                return (  <>
                <ContenedorListado info={this.state.favoritos}/>
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
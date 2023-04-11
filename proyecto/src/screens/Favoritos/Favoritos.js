import React, {Component} from 'react'
import ContenedorListado from '../../components/ContenedorListado/contenedorListado'
class Favoritos extends Component {
    constructor(props){
super(props)
this.state={
    favoritos:[]
}
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let storageAArray = JSON.parse(storage)
            Promise.all(
                storageAArray.map(id => {
                    return(
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?limit=20${id}`)
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
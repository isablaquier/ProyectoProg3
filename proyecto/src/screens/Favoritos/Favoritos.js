import React, {Component} from 'react'
import ContenedorListado from '../../components/ContenedorListado/ContenedorListado'
import ContenedorListadoAlbum from '../../components/ContenedorListadoAlbum/ContenedorListadoAlbum'

class Favoritos extends Component {
    constructor(props){
super(props)
this.state={
    favoritos:[],
    favoritosAlbum: []
}
    }
    componentDidMount(){
        let Array = []
        let storage = localStorage.getItem('favoritos');
        console.log(storage);
        if(storage !== null){
          
        //Recorro lista de Favoritos
        let listaFavoritos = JSON.parse(storage);
        console.log(listaFavoritos);
        listaFavoritos.map((id)=>{
            //Llamo a cada uno de los ids

            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
            .then(data => data.json())
            .then( info => {
                //Guardo la info en un array
                 let data = info //Te te esta guardon un objeto con toda la info
                 Array = this.state.favoritos
                 Array.push(data)
                this.setState({favoritos:Array}, console.log(this.state.favoritos))
            })
        
        })}
        let storageAlbum = localStorage.getItem('favoritosAlbum')
        console.log(storageAlbum);
        let arrayAlbum = []
        if(storageAlbum !== null){
            let listaFavoritosAlbum = JSON.parse(storageAlbum)
            listaFavoritosAlbum.map((id)=>{
         fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${id}`)
        .then(data => data.json())
        .then( info => {
            console.log(info,'info');
            //Guardo la info en un array
             let data = info //Te te esta guardon un objeto con toda la info
             arrayAlbum = this.state.favoritosAlbum

             if(!data.error){
                arrayAlbum.push(data);
                console.log('No tengo error');
                this.setState({favoritosAlbum: arrayAlbum})
             }else{
                console.log(data,'Si tengo error');
             }
        })
        })
        }
    }    
    render(){
            console.log(this.state);
            if(this.state.favoritos.length > 0 || (this.state.favoritosAlbum > 0 && this.state.favoritosAlbum)){
                console.log(this.state);
                return (  <>
                <ContenedorListado data={this.state.favoritos}/>
                <ContenedorListadoAlbum data={this.state.favoritosAlbum}/>

                </>)
        
            }
          else{
            return(
                <h1> No tienes canciones o albums en Favoritos</h1>
            )
          }      
        
           
    }
}

export default Favoritos
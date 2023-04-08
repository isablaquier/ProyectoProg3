import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class MasInfo extends Component {
    constructor (props){
        super(props) 
        this.state = {
           info:props.info,          
        }

    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track')
         .then(res => res.json())
         .then(data => this.setState({
             info: data.tracks.data
         }))
         .catch(err => console.log())}
  
             
    render(){
        return(
        <article>
            <Link to={`/unalbum/id${this.props.info.id}`}></Link>
            <h4>{this.props.info.title}</h4>
            <p>{this.props.info.artist.name}</p>
            <a onClick={()=> this.cambiarTexto()}>{this.state.texto}</a>
            <br>
            </br>
            <p className={this.state.clase}> Duración: {this.props.info.duration} minutos</p>
            <img src={this.props.info.album.cover}/>
            <section className='extra'>
            </section>
            <br></br>
            <button className= 'boton' onClick={item => this.addFavourites()}>Añadir a Favoritos</button>
            <button className= 'boton' onClick={item => this.removeItem()}> Eliminar a Favoritos</button>
            <p className='delete'>Borrar</p>
            </article>

        )
}
}
export default MasInfo
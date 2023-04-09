import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

class MasInfo extends Component {
    constructor (props){
        super(props) 
        this.state = {
           info:[],         
        }

    }


    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')
         .then(res => res.json())
         .then(data => this.setState({
             info: data.data
         }))
         .catch(err => console.log())}
  
             
    render(){
        return(
            <section className="content">
                {
                    this.state.info.map((artist, i) =>
                   
            <article className= 'show' key={artist + i}>           
            <Link to={`/unalbum/id${this.state.info.id}`}></Link>
            <h4>{this.state.info.name}</h4>
            <br>
            </br>
            <img src={this.state.info.picture_small} alt='foto'/>
            <section className='extra'>
            </section>
            <br></br>
            <button className= 'boton' onClick={item => this.addFavourites()}>Añadir a Favoritos</button>
            <button className= 'boton' onClick={item => this.removeItem()}> Eliminar a Favoritos</button>
            <p className='delete'>Borrar</p>
            </article>                   
                 )
                }
            </section> 
        
        )
}
}
export default MasInfo
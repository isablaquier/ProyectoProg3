import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

class ListadoMusica extends Component {
    constructor (props){
        super(props) 
        this.state = {
            texto: 'Ver más',
            clase: 'hidden'
           
        }

    }


    cambiarTexto(){
        if(this.state.texto === 'Ver mas'){
            this.setState({
                texto: 'Ver menos',
                clase:'show'
            })
        } else {
            this.setState({
                texto: 'Ver mas',
                clase:'hidden'
            })
        }
    }
    render(){
        return(
        <article>
            <Link to={`/unalbum/id${this.state.info.id}`}></Link>
            <h4>{this.state.info.title}</h4>
            <p className={this.state.clase}>{this.state.info.descripcion}</p>
            <img src={this.state.info.md5_image} />
            <a onClick={()=> this.cambiarTexto()}className='more'>{this.state.texto}</a> 
            <section className='extra'>
            </section>
            <p className='delete'>Borrar</p>
            </article>

        )
}
}
export default ListadoMusica
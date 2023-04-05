import React, {Component} from 'react';
import './styles.css'

class ListadoMusica extends Component {
    constructor (props){
        super(props) 
        this.state = {
           
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
            <h4>{this.state.info.title}</h4>
            <p>{this.state.info.descripcion}</p>
            <img src={this.state.info.md5_image} />
            <p className='more'>Ver más</p> 
            <section className='extra'>
            </section>
            <p className='delete'>Borrar</p>
            </article>

        )
}
}
export default ListadoMusica
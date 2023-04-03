import React from 'react'
import './styles.css'

function ListadoMusica (props) {
    
        return(
        <article>
            <h4>{props.info.title}</h4>
            <p>{props.info.descripcion}</p>
            <img src={props.info.md5_image} />
            <p className='more'>Ver más</p> 
            <section className='extra'>
            </section>
            <p className='delete'>Borrar</p>
            </article>

        )
}
export default ListadoMusica
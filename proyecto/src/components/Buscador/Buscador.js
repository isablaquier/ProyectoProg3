import React, {Component} from 'react'
import './styles.css'
class Buscador extends Component{
    constructor(props){
        super(props)
        this.state={
            valorInput:'',
        }
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    metodoQueFiltra(texto,arrayFuente){
        let filtrado = arrayFuente.filter((element) => element.title.toLowerCase().includes(texto.toLowerCase()))// pasa por todos los elemntos y valida lo que le pidamos
        return filtrado
    }

    guardarValor(event){
        this.setState(
            {
                valorInput:event.target.value
            }, () =>{
                let filtro = this.metodoQueFiltra(this.state.valorInput, this.props.fuente)
                this.props.actualizador(filtro)
            }
            //()=>console.log('Este es el estado que ve el setState: ${this.state.valorInput}')
        )
    }

    metodoQueEnvia(){
        console.log('Enviamos la info');
    }
    render(){
        return(
            <form className = 'formulario' onSubmit={(event)=> this.evitarSubmit(event)}>
               <div>
               <label> Busca lo que quieras</label>
                </div> 
                <div>
                <input onChange={(event)=> this.guardarValor(event)} value={this.state.valorInput}/>
            </div>
            <button onClick={() => this.metodoQueEnvia()}>Enviar consulta</button> 
                <button> Enviar info</button>
            </form>
        )
    }
}
export default Buscador
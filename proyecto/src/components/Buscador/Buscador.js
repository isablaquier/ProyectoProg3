import React, {Component} from 'react'
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

    guardarValor(event){
        this.setState(
            {
                valorInput:event.target.value
            },
            ()=>console.log('Este es el estado que ve el setState: ${this.state.valorInput}')
        )
    }

    metodoQueEnvia(){
        console.log('Enviamos la info');
    }
    render(){
        return(
            <form className = 'nav'onSubmit={(event)=> this.evitarSubmit(event)}>
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
import React, {Component} from 'react';

class Album extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:this.props.match.params.id,
            album:''
        }
    }
    componentDidMount(){
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/track/${this.state.id}`)
        .then(res => res.json())
        .then(data => this.setState({
            album: data
        }))
    }

    render() {
        return(
            <div>
                {this.state.album ==='' ?
                <h1>Cargando...</h1>:
                <div>
                    <img/> 
                    <h1></h1>
                </div>
                }
                
            </div>
            //Terminar de completar img y h1 con la info del proxy
        )
    }
    }
export default Album

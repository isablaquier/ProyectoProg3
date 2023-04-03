import React, {Component} from 'react';
import './styles.css'

class listadoMusica extends Component {
    constructor(props){
        super(props)
        this.state = {
            albums:[],
            tracks:[]
        }
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart`)
        .then(res => res.json())
        .then(data => this.setState({
            albums: data.albums,
            tracks: data.tracks
        }))
        .catch(err => console.log())
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){

    }
    render(){
        return(
            <section className="content">
            <h3 class="h3_index">Canciones</h3>
            <section class="canciones">
            </section>
            </section>  
        )
    }


}
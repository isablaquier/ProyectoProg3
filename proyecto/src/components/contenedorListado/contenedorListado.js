import React, {Components} from 'react';
import './styles.css'

class contenedorListado extends Component {
    constructor(props){
        super(props)
        this.state={
            tracks:[],
            albums:[]
        }
    }


    render(){
        return(<article>
            <h4>{this.props.}</h4>
            <p>${info[i].artist.name}</p>
            <img src="${info[i].album.cover}"/>
            </article>

        )
    }
}
export default contenedorListado
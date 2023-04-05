import React, { Component } from 'react';
import './styles.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <footer className="footer_index">
                    <p className='footer_content'>Sol de Apellaniz</p>
                    <p className='footer_content'>Julieta Da Forno</p>
                    <p className='footer_content'>Isabel Blaquier</p>
                </footer>
            </>
        )
    }

}

export default Footer
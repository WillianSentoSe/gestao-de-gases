import React, { Component } from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

export default class FormPage extends Component{
    render(){
        return (
            <div className='page'>
                <Link className='button'>Voltar</Link>
                <div className='form'>
                    
                </div>
            </div>
        );
    }
}
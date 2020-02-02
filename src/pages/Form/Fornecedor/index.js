import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TiWarningOutline , TiArrowLeft } from 'react-icons/ti';

import './styles.css';

export default class FormFornecedor extends Component{
    render(){
        return (
            <div className='page'>
                <Link to='/fornecedores' className='link'><TiArrowLeft size='26'/> Voltar</Link>
                <div className='form'>
                    <h1>Cadastrar Fornecedor</h1>
                    <div className='form-field'>
                        <span>Nome</span>
                        <input type='text'></input>
                    </div>
                    <div className='form-field'>
                        <span>Razão Social</span>
                        <input type='text'></input>
                    </div>
                    <div className='form-field'>
                        <span>Email</span>
                        <input type='text'></input>
                    </div>
                    <div className='form-field'>
                        <span>Telefone</span>
                        <input type='text'></input>
                    </div>
                    <button>Enviar</button>
                    <span className='error-label'><TiWarningOutline size='24' className='icon'/> O campo 'nome' não pode ficar vazio.</span>
                </div>
            </div>
        );
    }
}
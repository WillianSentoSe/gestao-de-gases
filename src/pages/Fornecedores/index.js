import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';
import { FaPen, FaTrash } from 'react-icons/fa';


export default class Fornecedores extends Component{
    render(){
        return (
            <div className='page'>
                <div className='content'>
                    <lu className='item-list'>
                        <li>
                            <div className='item-info'>
                                <strong>Stark Industries</strong>
                                <span>0129384</span>
                                <span>(21) 8002-0922</span>
                                <span>dollynho@timbrasil.com</span>
                            </div>
                            <div className='item-actions'>
                                <button><FaPen /></button>
                                <button className='delete'><FaTrash /></button>
                            </div>
                        </li>
                    </lu>
                    <div className='side-menu'>
                        <SearchBox/>
                        <p>1 item encontrados</p>
                    </div>
                </div>
                <div className='rodape'>
                        <button>Adicionar Fornecedor</button>
                </div>
            </div>
        );
    }
}
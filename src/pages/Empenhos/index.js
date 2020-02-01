import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';


import { FaPen, FaTrash } from 'react-icons/fa';

export default class Empenhos extends Component{
    render(){
        return (
            <div className='page'>
                <div className='content'>
                    <div className='item-list'>
                        <li>
                            <div className='item-info'>
                                <strong>N2309</strong>
                                <span>16/10/1997</span>
                                <span>3 gases</span>
                                <span>Stark Industries</span>
                                <span>R$ 2.000,00</span>
                            </div>
                            <div className='item-actions'>
                                <button><FaPen /></button>
                                <button><FaTrash /></button>
                            </div>
                        </li>
                        <li>
                            <div className='item-info'>
                                <strong>N2309</strong>
                                <span>16/10/1997</span>
                                <span>3 gases</span>
                                <span>Stark Industries</span>
                                <span>R$ 10,00</span>
                            </div>
                            <div className='item-actions'>
                                <button><FaPen /></button>
                                <button><FaTrash /></button>
                            </div>
                        </li> 
                    </div>
                    <div className="side-menu">
                        <SearchBox />
                        <p>2 itens encontrados.</p>
                    </div>
                </div>
                <div className="rodape">
                    <button href="">Adicionar Empenho</button>
                </div>
            </div>
        );
    }
}
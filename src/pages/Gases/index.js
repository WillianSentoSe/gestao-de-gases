import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';
import { FaPen, FaTrash } from 'react-icons/fa';

import './styles.css';

export default class Gases extends Component{
    render (){
        return (
            <div className='page'>
                <div className='content'>
                    <lu className='item-list'>
                        <li>
                            <div className='item-info'>
                                <strong>Oxigênio Liquido</strong>
                                <span>Tanque</span>
                                <span>100 litros</span>
                            </div>
                            <div className='item-actions'>
                                <button><FaPen /></button>
                                <button className='delete'><FaTrash /></button>
                            </div>
                        </li>
                    </lu>
                    <div className="side-menu">
                        <SearchBox />
                        <p>1 item encontrados.</p>
                    </div>
                </div>
                <div className="rodape">
                    <button href="">Adicionar Gás</button>
                </div>
            </div>
        );
    }
}
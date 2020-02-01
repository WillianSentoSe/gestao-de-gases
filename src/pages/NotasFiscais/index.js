import React, { Component } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import SearchBox from '../../components/SearchBox';

export default class NotasFiscais extends Component{
    render () {
        return (
            <div className='page'>
                <div className='content'>
                    <lu className='item-list'>
                        <li>
                            <div className='item-info'>
                                <strong>NF0081</strong>
                                <span>16/10/1997</span>
                                <span>3 gases</span>
                                <span>Stark Industries</span>
                                <span>R$ 2.000.000.000,00</span>
                            </div>
                            <div className='item-actions'>
                                <button><FaPen /></button>
                                <button><FaTrash /></button>
                            </div>
                        </li>
                        <li>
                            <div className='item-info'>
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                                <strong>NF0081</strong>
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
                    </lu>
                    <div className="side-menu">
                        <SearchBox />
                        <p>12 itens encontrados</p>
                    </div>
                </div>
                <div className="rodape">
                    <button href="">Adicionar Nota Fiscal</button>
                </div>
            </div>
        );
    }
}
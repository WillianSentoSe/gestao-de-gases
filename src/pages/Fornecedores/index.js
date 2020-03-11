import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';
import { FaPen, FaTrash } from 'react-icons/fa';
import api from '../../services/api';

export default class Fornecedores extends Component{
    state = {
        itemList: []
    };

    componentDidMount(){
        this.loadFornecedores()
    }

    loadFornecedores = async () => {
        const response = await api.get('/fornecedores')
        this.setState({itemList: response.data});
    }

    render(){
        const {itemList} = this.state;

        return (
            <div className='page'>
                <div className='content'>
                    <lu className='item-list'>
                        { itemList.map( item => (
                            <li>
                                <div className='item-info'>
                                    <strong>{ item.nome_fantasia }</strong>
                                    <span>{ item.razao_social }</span>
                                    <span>{ item.telefone }</span>
                                    <span>{ item.email }</span>
                                </div>
                                <div className='item-actions'>
                                    <button><FaPen /></button>
                                    <button className='delete'><FaTrash /></button>
                                </div>
                            </li>
                        ))}
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
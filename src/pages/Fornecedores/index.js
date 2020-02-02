import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';
import { FaPen, FaTrash } from 'react-icons/fa';

export default class Fornecedores extends Component{
    state = {
        itemList: []
    };

    componentDidMount(){
        //const response = await Api.getFornecedores();
        const response = [{name: 'Stark Industries', phoneNumber: '(21) 8002-8922', email: 'tstark@avengers.com', companyName: 'Stark Inc.'}, {name: 'Stark Industries', phoneNumber: '(21) 8002-8922', email: 'tstark@avengers.com', companyName: 'Stark Inc.'}];
        
        this.setState({itemList: response});
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
                                    <strong>{ item.name }</strong>
                                    <span>{ item.companyName }</span>
                                    <span>{ item.phoneNumber }</span>
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
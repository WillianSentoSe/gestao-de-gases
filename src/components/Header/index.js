import React , { Component } from 'react';
import { AiFillCopy, AiFillFund, AiFillDollarCircle, AiFillExperiment, AiFillContacts } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

import './styles.css';

export default class Header extends Component{
    render(){
        return (
            <header id="main-header">
                <h1>Gestão de Gases</h1>
                <div className="menu-views">
                    <NavLink exact to="/visaogeral" className="menu-button" activeClassName='selected-menu-button'><AiFillFund size="24" className="menu-icon"/> Visão Geral</NavLink>
                    <NavLink exact to="/" className="menu-button" activeClassName='selected-menu-button'><AiFillCopy size="24" className="menu-icon"/> Notas Fiscais</NavLink>
                    <NavLink to="/empenhos" className="menu-button" activeClassName='selected-menu-button'><AiFillDollarCircle size="24" className="menu-icon"/> Empenhos</NavLink>
                    <NavLink to="/gases" className="menu-button" activeClassName='selected-menu-button'><AiFillExperiment size="24" className="menu-icon"/> Gases</NavLink>
                    <NavLink exact to="/fornecedores" className="menu-button" activeClassName='selected-menu-button'><AiFillContacts size="24" className="menu-icon"/> Fornecedores</NavLink>
                </div>
            </header>
        );
    }
}
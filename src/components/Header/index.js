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
                    <NavLink exact to="/visaogeral" className="menu-button" activeClassName='selected-menu-button'><AiFillFund size="24" className="menu-icon"/> <span>Visão Geral</span></NavLink>
                    <NavLink exact to="/" className="menu-button" activeClassName='selected-menu-button'><AiFillCopy size="24" className="menu-icon"/><span>Notas Fiscais</span></NavLink>
                    <NavLink to="/empenhos" className="menu-button" activeClassName='selected-menu-button'><AiFillDollarCircle size="24" className="menu-icon"/><span>Empenhos</span></NavLink>
                    <NavLink to="/gases" className="menu-button" activeClassName='selected-menu-button'><AiFillExperiment size="24" className="menu-icon"/><span>Gases</span></NavLink>
                    <NavLink exact to="/fornecedores" className="menu-button" activeClassName='selected-menu-button'><AiFillContacts size="24" className="menu-icon"/><span>Fornecedores</span></NavLink>
                </div>
            </header>
        );
    }
}
import React, { Component } from 'react';
import SearchBox from '../SearchBox';

export default class SideMenu extends Component{
    render(){
        return (
            <div className="side-menu-group">
                <SearchBox />
            </div>
        );
    }
}
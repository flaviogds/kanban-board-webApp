import React, { Component } from 'react';
import { NavStyle } from './styled'

export default class Navbar extends Component{
    render(){
        return(
            <NavStyle>
                <ul>{this.props.children}</ul>
            </NavStyle>
        );
    }
}
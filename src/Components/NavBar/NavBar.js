import React, { Component } from 'react';
import { NavStyle } from './styled'

export default class Navbar extends Component{
    render(){
        return(
            <NavStyle>
                <nav>
                    <ul>{this.props.children}</ul>
                </nav>
            </NavStyle>
        );
    }
}
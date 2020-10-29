import React, { Component } from 'react';
import { Dropdown } from './styles'

export default class DropDownMenu extends Component {
    render(){
        return(
            <Dropdown>
                {this.props.children}
            </Dropdown>
        );
    }
}
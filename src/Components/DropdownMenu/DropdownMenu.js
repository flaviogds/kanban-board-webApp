import React, { Component } from 'react';
import { Dropdown } from './styles'

export default class DropDownMenu extends Component {
    render(){
        return(
            <Dropdown custom={this.props.custom}>
                {console.log(this.props)}
                {this.props.children}
            </Dropdown>
        );
    }
}
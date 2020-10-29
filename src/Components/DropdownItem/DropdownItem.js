import React, { Component } from 'react';
import { Item } from './styles'

export default class DropdownItem extends Component {
    render(){
        return(
            <Item custom={this.props}>
                <li> 
                    {this.props.leftchield ? <span>{this.props.leftchield}</span> : null}
                    {this.props.children}
                    {this.props.rightchield ? <span>{this.props.rightchield}</span> : null}
                </li>
            </Item>
        );
    }
}
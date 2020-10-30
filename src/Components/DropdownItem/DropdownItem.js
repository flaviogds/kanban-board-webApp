import React, { Component } from 'react';
import { Item } from './styles'

export default class DropdownItem extends Component {
    render(){
        return(
            <Item custom={this.props}>
                <li> 
                    {this.props.leftchild ? <span>{this.props.leftchild}</span> : null}
                    {this.props.children}
                    {this.props.rightchild ? <span>{this.props.rightchild}</span> : null}
                </li>
            </Item>
        );
    }
}
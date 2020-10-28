import React, { Component } from 'react';
import { Dropdown, DropdownItem } from './styled'

export default class DropDownMenu extends Component {
    render(){
        return(
            <Dropdown>
                <DropdownItem>
                    <li> 
                        {this.props.leftchield ? <span>{this.props.leftchield}</span> : null}
                        {this.props.children}
                        {this.props.rightchield ? <span>{this.props.rightchield}</span> : null}
                    </li>
                </DropdownItem>
            </Dropdown>
        );
    }
}
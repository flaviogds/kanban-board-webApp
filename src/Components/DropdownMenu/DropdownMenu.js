import React, { Component } from 'react';
import { DropStyle } from './styled'

export default class DropDownMenu extends Component {
    render(){
        return(
            <DropStyle>
                <div>
                    {this.props.children}
                </div>
            </DropStyle>
        );
    }
}
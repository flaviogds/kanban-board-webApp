import React, { Component } from 'react';
import { ItemStyle } from './styled'

export default class DropDownItem extends Component{
    render(){
        return (
            <ItemStyle>
                <a href="#"> 
                    {this.props.leftchield ? <span>{this.props.leftchield}</span> : null}
                    {this.props.children}
                    {this.props.rightchield ? <span>{this.props.rightchield}</span> : null}
                </a>
            </ItemStyle>
        );
    }
}
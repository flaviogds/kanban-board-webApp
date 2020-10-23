import React, { Component } from 'react';

export default class Button extends Component{
    render(){
        return (
            <button className={this.props.name} onClick={this.props.onAction} type={this.props.type}>
                {this.props.value}
            </button>
        );
    }
}
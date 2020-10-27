import React, { Component } from 'react';
import './Button.css'

export default class Button extends Component{
    render(){
        return (
            <button className={this.props.name, "tooltip"} onClick={this.props.onAction} type={this.props.type}>
                {this.props.value}
                { this.props.tooltip ? <span className="tooltiptext">{this.props.tooltip}</span> : null }
            </button>
        );
    }
}
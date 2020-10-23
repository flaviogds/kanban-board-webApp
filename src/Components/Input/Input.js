import React, { Component } from 'react';

export default class Input extends Component {
    render(){
        return (
            <div className={this.props.className}>
                <label>{this.props.label}</label>
                <input
                    type={this.props.type} 
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={event => this.props.onInput(event.target.value) }
                    required={this.props.required}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                />
                {this.props.children}
            </div>
        );
    }
}
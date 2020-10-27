import React, { Component } from 'react';

export default class Input extends Component {
    render(){
        return (
            <div className={this.props.className}>
                <label htmlFor={this.props.name}>{ this.props.label }</label>
                <input
                    type={this.props.type}
                    id={this.props.name}
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={event => this.props.onInput(event.target.value) }
                    required={this.props.required}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                />
               
                { this.props.children }
            </div>
        );
    }
}
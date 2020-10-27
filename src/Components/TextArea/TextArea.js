import React, { Component } from 'react';

export default class TextArea extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <textarea
                    id={this.props.name}
                    style={this.props.style}
                    rows={this.props.size.rows}
                    cols={this.props.size.cols}
                    type={this.props.type} 
                    name={this.props.name}
                    value={this.props.value}
                    onChange={event => this.props.onInput(event.target.value)}
                    required={this.props.required}
                ></textarea>
            </div>
        );
    }
}
import React, { Component } from 'react';

export default class TextArea extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <label>{this.props.label}</label>
                <textarea
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
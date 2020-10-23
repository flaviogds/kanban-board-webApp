import React, { Component } from 'react';
import './Form.css'

export default class Forms extends Component {
    render(){
        return (
            <form
                className={this.props.className}
                method={this.props.method}
                onSubmit={this.props.onSubmit}
            >
            {this.props.name?<h4>{this.props.name}</h4>:null}
            {this.props.children}
          </form>
        );
    }
}
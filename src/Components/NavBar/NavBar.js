import React, { Component } from 'react';

export default class NavBar extends Component {
    render(){
        return (
            <nav className="nav-container">
                {this.props.children}
            </nav>
        );
    };
}
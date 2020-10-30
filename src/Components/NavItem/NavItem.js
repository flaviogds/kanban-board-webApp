import React, { Component } from 'react';
import { Item } from './styled'

export default class NavItem extends Component {

    constructor(props){
        super(props);
        this.state = {open: false}
    }
    render(){
        return(
          <Item>
            <span onClick={() => this.setState( { open: !this.state.open } )}
            >
                {this.props.icon}
            </span>
            {this.state.open && this.props.children}
          </Item>
        );
    }
  }
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Item } from './styled'

export default class NavItem extends Component {
    constructor(props){
        super(props);
        this.state = {open: false}
    }

  componentDidMount() {
      document.addEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = event => {
      const domNode = ReactDOM.findDOMNode(this);
  
      if (!domNode || !domNode.contains(event.target)) {
          this.setState({
              open: false
          });
      }
  }
    render(){
      return(
        <Item key={'newtable'}>
          <span onClick={() => this.setState( { open: !this.state.open } )}
          >
              {this.props.icon}
          </span>
          {this.state.open && this.props.children}
        </Item>
      );
    }
  }
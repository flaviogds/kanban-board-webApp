import React, { Component } from 'react'

export default class Datalist extends Component {
    render() {
      return (
        <div className={this.props.className}>
            <label>{this.props.label}</label>
            <select onChange={ event => this.props.onInput(event.target.value) }>            
                {this.props.items.map( (item, index) => <option value={item} key={index}>{item}</option> ) }
            </select>
        </div>
      );
    }
}
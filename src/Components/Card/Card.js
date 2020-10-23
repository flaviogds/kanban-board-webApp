import React, { Component }from 'react';
import { v4 as uuidv4 } from 'uuid';
import Alert from '../Alert/Alert'

import './Card.css';

export default class Card extends Component{  
    render(){
        return (
            <>
                <div className="card" style={{background: this.props.card.properties.color}} key={uuidv4()}>
                    <div className="cardHeader">
                        {this.props.children}
                        <div className="priority">
                            {Alert(this.props.card.final)}
                        </div>
                    </div>
                    
                    <div className="card-body" onClick={this.props.onAction.bind(this, this.props)}>
                        <p className="card-title">{this.props.card.title}</p>
                        <p className="description">
                            {this.props.card.description.slice(0,150)+'... '}
                        </p>
                    </div>
                </div>
            </>
        );
    }
};
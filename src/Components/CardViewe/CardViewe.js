import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './CardViewe.css';

const CardViewe = props => {
    let now = new Date()
    
    return (
        <div className="card" style={{background: props.card.properties.color}} key={uuidv4()}>
            <div className="cardHeader">
                {props.children}
                <span className="priority">
                    {props.card.priority}
                </span>
                <span className="dateEnd">
                    {props.card.final === now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()
                        ? 'atrasado'
                        : 'noPrazo'
                    }
                </span>
            </div>
            <div onClick={props.onAction}>
                <div>
                    <h4>{props.card.title}</h4>
                </div>   
                <p className="description">
                    {props.card.description.slice()}
                </p>
            </div>
        </div>
    );
};

export default CardViewe;
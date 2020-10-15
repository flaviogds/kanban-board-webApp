import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Card.css';

const Card = props => {
    let now = new Date()
    
    return (
        <div onClick={console.log(props.card)} style={{background: props.card.properties.color}} className="card" key={uuidv4()}>
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
            <div>
                <h4>{props.card.title}</h4>
            </div>   
            <p className="description">
                {props.card.description.slice(0,100)+'... '}
            </p>
        </div>
    );
};

export default Card;
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Card.css';

const Card = props => {

    return (
        <div className="card" key={uuidv4()}>
            {props.children}
            <div className="title">
                <h5>{props.title}</h5>
                <span className="priority">
                    {props.properties.priority}
                </span>
            </div>   
            <p>{props.description}</p>
        </div>
    );
};

export default Card;
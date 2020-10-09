import React from 'react';
import Card from './Card';
import Button from './Button';

import { v4 as uuidv4 } from 'uuid';


import './Table.css';

const Table = props => {

    return (
        <div className='table' key={uuidv4()}>
            <Button value="&#9668;" onAction={props.onDirection[0].bind(this, props)}/>

            <Button value="&#9658;" onAction={props.onDirection[1].bind(this, props)}/>

            <Button value="+" onAction={props.onCard[0].bind(this, props)}/>

            <Button name="remove" value="&times;" onAction={props.onRemove.bind(this, props)}/>
            
            <h4>{props.name}</h4>
            <div>
                {props.cards.map(card => (
                    <Card
                        key={uuidv4()} 
                        title={card.title} 
                        description={card.description} 
                        properties={card.properties}
                    />
                ))}
            </div>
        </div>
    );
}

export default Table;
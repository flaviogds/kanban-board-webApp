import React from 'react';
import Button from '../Button/Button';

import { v4 as uuidv4 } from 'uuid';


import './Table.css';

const Table = props => {

    return (
        <div className='table' key={uuidv4()}>
            <Button
            value="&#9668;"
            onAction={props.onDirection[0].bind(this, props)}
            />

            <Button
            value="&#9658;"
            onAction={props.onDirection[1].bind(this, props)}
            />

            {props.cards.length > 0 
                ? <Button value="+" onAction={props.onRemove[1].bind(this, props)}/> 
                : null
            }

            <Button
            value="&#9746;"
            onAction={props.onRemove[0].bind(this, props)}
            />
            
            <h4>{props.name}</h4>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Table;
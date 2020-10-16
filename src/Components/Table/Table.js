import React from 'react';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import './Table.css';

const Table = props => {
    return (
        <div className='table' key={uuidv4()}>
            <div className="tableHeader">
                {props.position !== 0
                    ? <Button value="&#9668;" onAction={props.onDirection[0].bind(this, props)} />
                    : null
                }
                {true
                    ? <Button value="&#9658;" onAction={props.onDirection[1].bind(this, props)} />
                    : null
                }

                {props.cards.length > 0 
                    ? <Button value="+" onAction={props.onRemove[1].bind(this, props)} /> 
                    : null
                }

                <Button value="&#9746;" onAction={props.onRemove[0].bind(this, props)}  />
            </div>
            
            <h4>{props.name}</h4>

            <div className="tableBody">
                {props.children}
            </div>
        </div>
    );
}

export default Table;
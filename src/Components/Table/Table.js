import React, { useContext } from 'react';
import { order } from '../main/main'

import { Data } from '../state/Data/Data';

import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';

import './Table.css';

const Table = props => {

    const { data, setData } = useContext(Data);

    const removeTable = table => {
        let filtereds = data.tables.filter(target => target.name !== table.name);
        filtereds.map((target, indice) => target.position = indice);
        setData({ ...data, metadata: filtereds.length, tables: filtereds});
    }
    
    const leftMove = table => {
        if(table.position > 0){
            let from = {...table, position: (table.position-1), children: []};
            let to = data.tables.filter(target => target.position === from.position)[0];

            to = {...to, position: to.position + 1 };

            let newOrder = data.tables.filter(target => (target.position !== to.position && target.position !== from.position));

            newOrder = [...newOrder, from, to];

            order(newOrder);
            
            setData({...data, tables: newOrder});
        }
    }

    const rightMove = table => {
        if(table.position < data.tables.length-1){
            let from = {...table, position: (table.position+1), children: []};
            let to = data.tables.filter(target => target.position === from.position)[0];

            to = {...to, position: to.position-1 }

            let newOrder = data.tables.filter(target => (target.position !== to.position && target.position !== from.position));

            newOrder = [...newOrder, from, to]

            order(newOrder)

            setData({...data, tables: newOrder})
        }
    }

    return (
        <div className='table' key={uuidv4()}>
            <div className="tableHeader">
                <Button value="&#9664;" onAction={leftMove.bind(this, props.table)}/>
                <Button value="&#9654;" onAction={rightMove.bind(this, props.table)}/>
                {props.table.cards.length !== 0 ? <Button value="&#128204;" onAction={props.onAction}/> : null}
                <Button value="&#9940;" onAction={removeTable.bind(this, props.table)}/>
            </div>
            
            <h4>{props.table.name}</h4>

            <div>{props.children}</div>
        </div>
    );
}

export default Table;
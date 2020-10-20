import React, { useContext } from 'react';

import { Data } from '../state/data/Data';
import { ModalShow } from '../state/modal/Modal';

import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';

import './Table.css';

const Table = props => {

    const { data, setData } = useContext(Data);

    const { setShow } = useContext(ModalShow);

    const removeTable = table => {
        let filtereds = data.tables.filter(target => target.position !== table.position);

        filtereds.map((target, indice) => target.position = indice);

        setData({ ...data, metadata: filtereds.length, tables: filtereds});
    }

    return (
        <div className='table' key={uuidv4()}>
            <div className="tableHeader">
                <Button value="Left"/>
                <Button value="Right"/>
                <Button value="New Card" onAction={() => setShow({show: true, table: props.table})}/>
                <Button value="Remove" onAction={removeTable.bind(this, props.table)}/>
            </div>
            
            <h4>{props.table.name}</h4>

            <div className="tableBody">{props.children}</div>
        </div>
    );
}

export default Table;
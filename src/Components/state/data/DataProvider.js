import React, { useState, useEffect } from 'react';
import { getItem, setItem } from '../../localStorage'
import { collection } from '../../default/defaultModel'
import { Data } from './Data'

export default function Provider( { children } ) {

    const [data, setData] = useState(JSON.parse(getItem('@kanban-web/collection', JSON.stringify(collection))) === null 
    ? collection : JSON.parse(getItem('@kanban-web/collection', collection)));

    useEffect(() => setItem('@kanban-web/collection', JSON.stringify(data)), [data, setData])

    return (
        <Data.Provider value={ { data, setData } }>
            {children}
        </Data.Provider>
    );

}
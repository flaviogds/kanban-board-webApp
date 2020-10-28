import React, { useContext } from 'react';
import { order } from '../main/main'

import { Data } from '../state/Data/Data';

//import  from '../Button/Button';

import { Container, Header, Body, Title, Button } from './styles.js';


export default function Table(props){

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
        <Container key={props.id}>
            <Header>
                <Title>{props.table.name}</Title>
                <Button onClick={leftMove.bind(this, props.table)}>&#9664;</Button>
                <Button onClick={rightMove.bind(this, props.table)}>&#9654;</Button>
                {
                    props.table.cards.length !== 0 
                    ? <Button onClick={props.onAction}>&#128204;</Button>
                    : null
                }
                <Button onClick={removeTable.bind(this, props.table)}>&#9940;</Button>
            </Header>
            <Body className={props.id}>{props.children}</Body>
        </Container>
    );
}


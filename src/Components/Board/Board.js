import React, { useContext, useReducer, useState } from 'react';
import { order } from '../main/main';

import { Data } from '../state/Data/Data';
import NewItem, {stateDefault} from '../state/NewItem/NewItem';
import { TYPE_NEW_CARD, TYPE_DEFAULT } from '../state/NewItem/types';

import Table from '../Table/Table';
import Card from '../Card/Card';
import NewCard from '../NewCard/NewCard';
import CardViewe from '../CardViewe/CardViewe';

import { Container, Button, NewTask} from './styles.js';

export default function Board () {

    const { data, setData } = useContext(Data);

    const [newItem, setNew] = useReducer(NewItem, stateDefault);

    const [ show, setShow ] = useState({show: false, card: newItem.card, modal: ''});

               
    const removeCard = card => {
        handleDrop();
        let filterTable = data.tables.filter(target => target.name !== card.table);
        
        let table = data.tables.filter(target => target.name === card.table)[0];
        
        let updateCards = table.cards.filter(target => target.id !== card.id)
        
        table.cards= updateCards
        
        filterTable = [...filterTable, table]
        
        order(filterTable)
        
        setData({...data, tables: filterTable})
    }
        
    const advancedTask = card => {
        handleDrop();
        let from = data.tables.filter(target => target.name === card.table)[0];
        
        if(from.position < data.tables.length-1) {
            let to = data.tables.filter(target => target.position === from.position+1)[0];
        
            let tables = data.tables.filter(target => target.name !== from.name && target.name !== to.name)
        
            from = {...from, cards: from.cards.filter(target => target.id !== card.id)}
        
            to = {
                ...to,
                cards: [...to.cards,
                    {
                        ...card,
                        table: to.name,
                        position: to.cards.length,
                    }
                ]
            }
        
            tables = [...tables, from, to]
        
            order(tables)
        
            setData({...data, tables: tables})
        }
    }
        
    const backTask = card => {
        handleDrop();
        let from = data.tables.filter(target => target.name === card.table)[0];
        
        if(from.position > 0) {
            let to = data.tables.filter(target => target.position === from.position-1)[0];
        
            let tables = data.tables.filter(target => target.name !== from.name && target.name !== to.name)
        
            from = {...from, cards: from.cards.filter(target => target.id !== card.id)}
        
            to = {
                ...to,
                cards: [...to.cards,
                    {
                        ...card,
                        table: to.name,
                        position: to.cards.length,
                    }
                ]
            }
        
            tables = [...tables, from, to]
        
            order(tables)
        
            setData({...data, tables: tables})
        }
    }

    const handleEdit = card => {
        handleDrop();
        setNew( { ...TYPE_NEW_CARD, payload: { ...card } } );
        setShow( { show: true, viewe: false, card: newItem.card, modal:"Editar Tarefa"  } );
    }

    const handleDrop = () => {
        setShow( { show: false, viewe: false, card: newItem.card} )
        setNew( TYPE_DEFAULT )
    }

    return(
        <Container>           
            {data.tables.map(table => (
                <Table
                    key={table.key}
                    onAction={ () => setShow( { ...show, show: true, table: table, modal:"Nova Tarefa" } ) }
                    table={{...table}}
                >
                    {table.cards.map(card => {
                        return(
                            <Card key={card.key} card={card} onAction={target => setShow( {...target, viewe: true } ) }>
                                <Button onClick={handleEdit.bind(this, card)}>&#128394;&#65039;</Button>
                                <Button onClick={backTask.bind(this, card)}>&#9664;</Button>
                                <Button onClick={advancedTask.bind(this, card)}>&#9654;</Button>
                                <Button onClick={removeCard.bind(this, card)}>&#9940;</Button>
                            </Card>
                        );
                    })}
                    <NewTask onClick={() => setShow( { ...show, show: true, table: table, modal:"Nova Tarefa" } )} >&#10133;</NewTask>
                </Table>
            ))}

            <NewCard show={show} handleDrop={handleDrop}/>

            <CardViewe show={show} handleDrop={handleDrop}/>
        </Container>
    );
}
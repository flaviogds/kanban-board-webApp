import React, { useContext, useReducer, useState } from 'react';
import { MdModeEdit, MdSkipPrevious, MdSkipNext, MdAdd, MdDelete, MdLock, MdLockOpen, MdAssignmentTurnedIn } from 'react-icons/md'
import { order } from '../main/main';

import { Data } from '../state/Data/Data';
import NewItem, {stateDefault} from '../state/NewItem/NewItem';

import Table from '../Table/Table';
import Card from '../Card/Card';
import NewCard from '../NewCard/NewCard';
import CardViewe from '../CardViewe/CardViewe';

import { Container, Button, NewTask } from './styles.js';

export default function Board ({children}) {

    const { data, setData } = useContext(Data);

    const [newItem ] = useReducer(NewItem, stateDefault);

    const [ show, setShow ] = useState({show: false, viewe: false, card: newItem.card, modal: ''});

    const lock = card => {
    
        let from = data.tables.filter(target => target.name === card.table).pop();
    
        let filtereds = data.tables.filter(target => target.name !== card.table);
    
        from = {...from, cards: from.cards.filter(target => target.id !== card.id)};
        
        card = {...card,  properties: {...card.properties, lock: !card.properties.lock } }
    
        let orderingCards = [...from.cards, card]
    
        order(orderingCards)
    
        from = {...from, cards: orderingCards}
    
        filtereds = [...filtereds, from]
    
        order(filtereds)
    
        setData({...data, tables: filtereds})    
    }
    const concluded = card => {
    
        let from = data.tables.filter(target => target.name === card.table).pop();
    
        let filtereds = data.tables.filter(target => target.name !== card.table);
    
        from = {...from, cards: from.cards.filter(target => target.id !== card.id)};
        
        card = {...card,  properties: {...card.properties, concluded: !card.properties.concluded } }
    
        let orderingCards = [...from.cards, card]
    
        order(orderingCards)
    
        from = {...from, cards: orderingCards}
    
        filtereds = [...filtereds, from]
    
        order(filtereds)
    
        setData({...data, tables: filtereds})    
    }         
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
        setShow( { show: true, viewe: false, card: { ...card }, modal:"Editar Tarefa"  } );
    }
    const handleDrop = () => {
        setShow( { show: false, viewe: false, card: newItem.card, modal: ''} )
    }

    return(
        <Container>           
            {data.tables.map(table => (
                <Table
                    key={table.name}
                    onAction={ () => setShow( { ...show, show: true, table: table, modal:"Nova Tarefa" } ) }
                    table={{...table}}
                >
                    {table.cards.map(card => {
                        return(
                            <Card key={card.id} card={card} onAction={target => setShow( {...show, card: {...target}, viewe: true } ) }>
                                {!card.properties.lock ? <Button onClick={handleEdit.bind(this, card)}>     <MdModeEdit style={ {verticalAlign: 'middle'} }/>   </Button> : null}
                                {!card.properties.lock ? <Button onClick={backTask.bind(this, card)}>   <MdSkipPrevious style={ {verticalAlign: 'middle'} }/>   </Button> : null}
                                {!card.properties.lock ? <Button onClick={advancedTask.bind(this, card)}>   <MdSkipNext style={ {verticalAlign: 'middle'} }/>   </Button> : null}
                                {!card.properties.lock ? <Button onClick={concluded.bind(this, card)}>   <MdAssignmentTurnedIn  style={ {verticalAlign: 'middle'} }/>   </Button> : null}
                                {!card.properties.lock ? <Button onClick={removeCard.bind(this, card)}>     <MdDelete style={ {verticalAlign: 'middle'} }/>     </Button> : null}
                                <Button onClick={ lock.bind(this, card) }> {!card.properties.lock ? <MdLockOpen style={ {verticalAlign: 'middle'} }/> : <MdLock/> } </Button>
                            </Card>
                        );
                    })}
                    <NewTask onClick={() => setShow( { ...show, show: true, table: table, modal:"Nova Tarefa" } )} ><MdAdd  style={ {verticalAlign: 'middle'} }/></NewTask>
                </Table>
            ))}

            <NewCard show={show} handleDrop={handleDrop}/>            
            <CardViewe show={show} handleDrop={handleDrop}/>

            {children}
        </Container>
    );
}
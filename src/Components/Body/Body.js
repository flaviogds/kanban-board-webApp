import React, { useContext, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { order } from '../main/main';

import { Data } from '../state/Data/Data';
import NewItem, {stateDefault} from '../state/NewItem/NewItem';
import { TYPE_NEW_TABLE, TYPE_NEW_CARD, TYPE_DEFAULT } from '../state/NewItem/types';

import Table from '../Table/Table';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Forms';
import Input from '../Input/Input';
import Datalist from '../Datalist/Datalist'
import Modal from '../Modal/Modal';
import TextArea from '../TextArea/TextArea';
import CardViewe from '../CardViewe/CardViewe';

import './Body.css'

export default function Body () {

    const { data, setData } = useContext(Data);

    const [newItem, setNew] = useReducer(NewItem, stateDefault);

    const [ show, setShow ] = useState({show: false, card: newItem.card, modal: ''});

    const addTable = event => {
        event.preventDefault();
        if(data.tables.filter(table => table.name === newItem.table.name).length === 0 ){
            if (newItem.table.name !== '') {
                setData({ ...data, metadata: { total_tables: data.tables.length+1 }, tables: [...data.tables, newItem.table]});
                setNew( TYPE_DEFAULT );
            }
            else{
                window.alert("Name table is required")
            }
        }
        else{
            window.alert("Name table is already in use")
        }
    }
        
    const createCard = event => {
        event.preventDefault();
        
        if(show.show && newItem.card.title !== '') {
            let table = data.tables.filter(target => target.name === show.table.name)[0];
        
            let card = {...newItem.card, position: table.cards.length, table: table.name, };
            
            let filtereds = data.tables.filter(target => target.name !== table.name);
            
            let updateCards = [...table.cards, card];
        
            let updateTable = {...table, cards: updateCards};
        
            filtereds = [...filtereds, updateTable];
        
            order(filtereds);
        
            setData( {...data, tables: filtereds} );
        
            setNew( TYPE_DEFAULT );
        
            handleDrop();
        }
    }

    const editCard = event => {
        event.preventDefault();
    
        let from = data.tables.filter(target => target.name === newItem.card.table).pop();
    
        let filtereds = data.tables.filter(target => target.name !== newItem.card.table);
        
        let card = from.cards.filter(target => target.position === newItem.card.position).pop();
    
        from = {...from, cards: from.cards.filter(target => target.position !== newItem.card.position)};
        
        card = {...newItem.card}
    
        let orderingCards = [...from.cards, card]
    
        order(orderingCards)
    
        from = {...from, cards: orderingCards}
    
        filtereds = [...filtereds, from]
    
        order(filtereds)
    
        setData({...data, tables: filtereds})
    
        handleDrop();
    }
        
    const removeCard = card => {
        handleDrop();
        let filterTable = data.tables.filter(target => target.name !== card.table);
        
        let table = data.tables.filter(target => target.name === card.table)[0];
        
        let updateCards = table.cards.filter(target => target.position !== card.position)
        
        table.cards= updateCards
        
        filterTable = [...filterTable, table]
        
        order(filterTable)
        
        setData({...data, tables: filterTable})
    }
        
    const advancedTask = card => {
        let from = data.tables.filter(target => target.name === card.table)[0];
        
        if(from.position < data.tables.length-1) {
            let to = data.tables.filter(target => target.position === from.position+1)[0];
        
            let tables = data.tables.filter(target => target.name !== from.name && target.name !== to.name)
        
            from = {...from, cards: from.cards.filter(target => target.position !== card.position)}
        
            to = {
                ...to,
                cards: [...to.cards,
                    {
                        ...card,
                        table: to.name,
                        position: to.cards.length,
                        properties: (to.position === data.tables.length-1 ? {color: "#919191"} : {...card.properties})
                    }
                ]
            }
        
            tables = [...tables, from, to]
        
            order(tables)
        
            setData({...data, tables: tables})
        }
    }
        
    const backTask = card => {
        let from = data.tables.filter(target => target.name === card.table)[0];
        
        if(from.position > 0) {
            let to = data.tables.filter(target => target.position === from.position-1)[0];
        
            let tables = data.tables.filter(target => target.name !== from.name && target.name !== to.name)
        
            from = {...from, cards: from.cards.filter(target => target.position !== card.position)}
        
            to = {
                ...to,
                cards: [...to.cards,
                    {
                        ...card,
                        table: to.name,
                        position: to.cards.length,
                        properties: (to.position === data.tables.length-1 ? {color: "#919191"} : {color: "#FFFFFF"})
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
        setShow( { show: true, viewe: false, card: newItem.card, modal:"Edit Card"  } )
        setNew( { ...TYPE_NEW_CARD, payload: { ...card } } )
    }

    const handleDrop = () => {
        setShow( { show: false, viewe: false, card: newItem.card} )
        setNew( TYPE_DEFAULT )
    }

    return(
        <div className="tables">
            {data.tables.map(table => (
                <Table key={uuidv4()} onAction={() => setShow({ show: true, viewe: false, card: newItem.card, table: table, modal:"New Card" })} table={{...table}}>
                    {table.cards.map(card => {
                        return(
                            <Card key={uuidv4()} card={{...card}} onAction={target => setShow( {...target, viewe: true } ) }>
                                <Button
                                    value="edit"
                                    onAction={handleEdit.bind(this, card)}/>
                                <Button
                                    value="&#9664;"
                                    onAction={backTask.bind(this, card)}/>
                                <Button
                                    value="&#9654;"
                                    onAction={advancedTask.bind(this, card)}/>
                                <Button
                                    value="&#9940;"
                                    onAction={removeCard.bind(this, card)}/>
                            </Card>
                        );
                    })}
                    {table.cards.length === 0 ? <div className="initial"><Button value="&#10133;" onAction={() => (setShow({show: true, viewe:false, card: newItem.card, table: table, modal:"New Card"}))}/></div> : null}
                </Table>
            ))}
            <Form className="newTable" name="New Table" method="post" onSubmit={addTable.bind(newItem)} >
                <Input
                    name="table"
                    type="text"
                    value={newItem.table.name}
                    onInput={event => setNew( { ...TYPE_NEW_TABLE, payload: { ...newItem.table, name: event, position: data.tables.length } } )}
                />
                <Button value="Add Table" type="submit" />
            </Form>
            <Modal show={show.show} handleDrop={handleDrop} name={show.modal}>
                <Form
                    className="inputCard"
                    method="post"
                    onSubmit={ show.modal === "Edit Card" ? editCard.bind(show) : createCard.bind(show)}>
                
                    <Input
                        className="color"
                        type="color"
                        name="color"
                        value={newItem.card.properties.color}
                        onInput={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, properties: { color: event } } } )}
                    />
                    
                    <Input
                        className="title"
                        label="Titulo"
                        name="title"
                        value={newItem.card.title}
                        onInput={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, title: event } } )}
                    />
                    
                    <TextArea
                        className="textArea"
                        style={{resize: 'none'}}
                        size={{rows: '', cols: ''}}
                        label="Descrição"
                        name="description"
                        value={newItem.card.description}
                        onInput={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, description: event } } )}
                    />
                    
                    <Input
                        className="date"
                        type="date"
                        label="Data Início"
                        name="dateInit"
                        value={newItem.card.initial}
                        onInput={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, initial: event } } )}
                    />
                    
                    <Input
                        className="date"
                        type="date"
                        label="Previsão de Conclusão"
                        name="dateEnd"
                        value={newItem.card.final}
                        onInput={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, final: event } } )}
                    />
                    
                    <Datalist
                        className="priorityField"
                        label={"Prioridade: "}
                        items={["Normal","Mean","High","Immediate"]}
                        onInput={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, priority: event } } )}
                    />

                    <Button value="Concluir" type="onSubmit"/>
                    <Button value="Cancelar" onAction={handleDrop}/>
                </Form>
            </Modal>
            <Modal show={show.viewe} handleDrop={handleDrop} name={show.card.title}>
                <CardViewe card={show.card}>
                    {show.children}
                </CardViewe>
            </Modal>
        </div>
    );
}
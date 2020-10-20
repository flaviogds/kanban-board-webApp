import React, { useContext, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { order } from '../main'

import { Data } from '../state/data/Data';
import { ModalShow } from '../state/modal/Modal';
import NewItem, {stateDefault} from '../state/newItem/NewItem'

import Table from '../Table/Table';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Form from '../Form/Forms';
import Input from '../Input/Input';
import Modal from '../Modal/Modal'
import TextArea from '../TextArea/TextArea'
import CardViewe from '../CardViewe/CardViewe'

export default function Body () {

    const { data, setData } = useContext(Data);

    const { show, setShow } =useContext(ModalShow);

    const [newItem, setNew] = useReducer(NewItem, stateDefault);

    const [showCard, setShowCard] = useState({show: false})

    const addTable = event => {
        event.preventDefault();
        
        setData({ ...data, metadata: { total_tables: data.tables.length+1 }, tables: [...data.tables, newItem.table]});
        
        setNew( { type: "DEFAULT" } );
    }
        
    const createCard = event => {
        event.preventDefault();
        
        if(show.show) {
            let table = data.tables.filter(target => target.name === show.table.name)[0];
        
            let card = {...newItem.card, position: table.cards.length, table: table.name, };
            
            let filtereds = data.tables.filter(target => target.name !== table.name);
            
            let updateCards = [...table.cards, card];
        
            let updateTable = {...table, cards: updateCards};
        
            filtereds = [...filtereds, updateTable];
        
            order(filtereds);
        
            setData( {...data, tables: filtereds} );
        
            setNew( { type: "DEFAULT" } );
        
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

    const handleDrop = () => {
        setShow({show: false, card: '', tale: '', modal: ''})
        setNew( { type: "DEFAULT" } )
    }

    return(
        <div className="tables">
            {data.tables.map(table => (
                <Table key={uuidv4()} table={{...table}}>
                    {table.cards.map(card => {
                        return(
                            <Card key={uuidv4()} card={{...card}} onAction={() => setShowCard( { show: true, card: { ...card } } ) }>
                                <Button
                                    value="edit"
                                    onAction={() => {
                                        setShow( { show: true, modal:"Edit Card" } )
                                        setNew( { type: "NEWCARD", payload: { ...card } } )
                                        }}/>
                                <Button
                                    value="back"
                                    onAction={backTask.bind(this, card)}/>
                                <Button
                                    value="go"
                                    onAction={advancedTask.bind(this, card)}/>
                                <Button
                                    value="del"
                                    onAction={removeCard.bind(this, card)}/>
                            </Card>
                        );
                    })}
                    {table.cards.length === 0 ? <div className="initial"><Button value="+" onAction={() => (setShow({show: true, table: table, modal:"New Card"}))}/></div> : null}
                </Table>
            ))}
            <Form className="newTable" name="New Table" method="post" onSubmit={addTable.bind(newItem)} >
                <Input
                    name="table"
                    type="text"
                    value={newItem.table.name}
                    onInput={(event) => (setNew( { type: "NEWTABLE", payload: { ...newItem.table, name: event } } ))}
                    required={true}
                />
                <Button value="Add Table" type="submit" />
            </Form>
            <Modal show={show.show} handleDrop={handleDrop} name={show.modal}>
                <Form method="post" onSubmit={ show.modal === "Edit Card" ? editCard.bind(show) : createCard.bind(show)}>
                
                    <Input
                        className="inputColor"
                        type="color"
                        name="color"
                        value={newItem.card.properties.color}
                        onInput={(event) => (setNew( { type: "NEWCARD", payload: { ...newItem.card, properties: { color: event } } } ))}/>
                    
                    <Input
                        className="input"
                        label="Titulo"
                        name="title"
                        required={true}
                        value={newItem.card.title}
                        onInput={(event) => (setNew( { type: "NEWCARD", payload: { ...newItem.card, title: event } } ))}/>
                    
                    <TextArea
                        className="textArea"
                        style={{resize: 'none'}}
                        size={{rows: '5', cols: '23'}}
                        label="Descrição"
                        name="description"
                        required={true}
                        value={newItem.card.description}
                        onInput={(event) => (setNew( { type: "NEWCARD", payload: { ...newItem.card, description: event } } ))}/>
                    
                    <Input
                        className="inputDate"
                        type="date"
                        label="Data Início"
                        name="dateInit"
                        value={newItem.card.initial}
                        onInput={(event) => (setNew( { type: "NEWCARD", payload: { ...newItem.card, initial: event } } ))}/>
                    
                    <Input
                        className="inputDate"
                        type="date"
                        label="Previsão de Conclusão"
                        name="dateEnd"
                        value={newItem.card.final}
                        onInput={(event) => (setNew( { type: "NEWCARD", payload: { ...newItem.card, final: event } } ))}/>
                    
                    <Input
                        className="scrollRange"
                        type="range"
                        step={1} min={0} max={3}
                        label={'Prioridade: '+newItem.card.priority}
                        name="priority" value={newItem.card.priority}
                        onInput={(event) => (setNew( { type: "NEWCARD", payload: { ...newItem.card, priority: event } } ))}/>
                    
                    <Button className="formButton" value="Adicionar" type="onSubmit"/>
                    <Button className="formButton" value="Cancelar" onAction={handleDrop}/>
                </Form>
            </Modal>
            <Modal show={showCard.show} handleDrop={() => setShowCard(false)} name={showCard.card.title}>
                <CardViewe card={{...showCard.card}}/>
            </Modal>
        </div>
    );
}
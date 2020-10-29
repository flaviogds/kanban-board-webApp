import React, { useContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { order } from '../main/main';
import { Data } from '../state/Data/Data';
import NewItem, {stateDefault} from '../state/NewItem/NewItem';
import { TYPE_NEW_CARD, TYPE_DEFAULT } from '../state/NewItem/types';

import Input from '../Input/Input';
import Datalist from '../Datalist/Datalist';
import TextArea from '../TextArea/TextArea';

import { Modal, Form, Header,Title, Button, Smooth, Close, Color  } from './styles'

export default function NewCard({show, handleDrop}){

    const { data, setData } = useContext(Data);

    const [newItem, setNew] = useReducer(NewItem, stateDefault);

    useEffect( () => {
        setNew( { ...TYPE_NEW_CARD, payload: { ...show.card } } );
    }, [show])

    const createCard = event => {
        event.preventDefault();
        
        if(show.show && newItem.card.title !== '') {
            let table = data.tables.filter(target => target.name === show.table.name)[0];
        
            let card = {...newItem.card, position: table.cards.length, id: uuidv4(), table: table.name, };
            
            let filtereds = data.tables.filter(target => target.name !== table.name);
            
            let updateCards = [...table.cards, card];
        
            let updateTable = {...table, cards: updateCards};
        
            filtereds = [...filtereds, updateTable];
        
            order(filtereds);
        
            setData( {...data, tables: filtereds} );
            setNew( TYPE_DEFAULT )
        
            handleDrop();
        }
    }

    const editCard = event => {
        event.preventDefault();
    
        let from = data.tables.filter(target => target.name === newItem.card.table).pop();
    
        let filtereds = data.tables.filter(target => target.name !== newItem.card.table);
        
        let card = from.cards.filter(target => target.id === newItem.card.id).pop();
    
        from = {...from, cards: from.cards.filter(target => target.id !== newItem.card.id)};
        
        card = {...newItem.card}
    
        let orderingCards = [...from.cards, card]
    
        order(orderingCards)
    
        from = {...from, cards: orderingCards}
    
        filtereds = [...filtereds, from]
    
        order(filtereds)
    
        setData({...data, tables: filtereds})
        
        setNew( TYPE_DEFAULT )
        
        handleDrop();
    }

    return(
        <>
            {show.show ? <Smooth onClick={handleDrop} className="modal-drop"></Smooth> : null}
            
            <Modal show={show}>
                <Header show={show}>
                    <Title>{show.modal}</Title>
                    <Close onClick={handleDrop}/>
                </Header>                   
                <Form
                    method="post"
                    onSubmit={ show.modal === "Editar Tarefa" ? editCard.bind(show) : createCard.bind(show)}
                >
                
                    <Color
                        type="color"
                        name={"color"}
                        value={newItem.card.properties.color}
                        onChange={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, properties: { color: event.target.value } } } )}
                    />

                    <label> Titulo
                        <input
                            label="Titulo"
                            type="text"
                            name="title"
                            value={newItem.card.title}
                            onChange={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, title: event.target.value } } )}
                        />
                    </label>
                    
                    <textarea
                        style={{resize: 'none'}}
                        size={{rows: '', cols: ''}}
                        name="description"
                        value={newItem.card.description}
                        onChange={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, description: event.target.value } } )}
                    />
                    
                    <input
                        type="date"
                        name="dateInit"
                        value={newItem.card.initial}
                        onChange={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, initial: event.target.value } } )}
                    />
                    
                    <input
                        type="date"
                        name="dateEnd"
                        value={newItem.card.final}
                        onChange={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, final: event.target.value } } )}
                    />
                    
                    <Datalist
                        className="priorityField"
                        label={"Prioridade: "}
                        value={newItem.priority}
                        items={ [ "", "Normal", "Média", "Alta", "Urgente" ] }
                        onInput={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, priority: event } } )}
                    />

                    <Button type="onSubmit">Concluir</Button>
                    <Button onClick={handleDrop}>Cancelar</Button>
                </Form>
            </Modal>
        </>
    );
}
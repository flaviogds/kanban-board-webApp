import React, { useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { order } from '../main/main';
import { Data } from '../state/Data/Data';
import NewItem, {stateDefault} from '../state/NewItem/NewItem';
import { TYPE_NEW_CARD, TYPE_DEFAULT } from '../state/NewItem/types';

import Input from '../Input/Input';
import Datalist from '../Datalist/Datalist';
import TextArea from '../TextArea/TextArea';
import close from '../default/close.svg';

import { Modal, Form, Header,Title, Button, Smooth  } from './styles'

export default function NewCard({show, handleDrop}){

    const { data, setData } = useContext(Data);

    const [newItem, setNew] = useReducer(NewItem, stateDefault);

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
        
            setNew( TYPE_DEFAULT );
        
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
    
        handleDrop();
    }

    return(
        <>
            {show.show ? <Smooth onClick={handleDrop} className="modal-drop"></Smooth> : null}
            
            <Modal show={show}>
                <Header show={show}>
                    <Title>{show.modal}</Title>
                    <img src={close} onClick={handleDrop} alt="close"/>
                </Header>                   
                <Form
                    method="post"
                    onSubmit={ show.modal === "Editar Tarefa" ? editCard.bind(show) : createCard.bind(show)}>
                
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
                        items={["Normal","Média","Alta","Urgente"]}
                        onInput={event => setNew( { ...TYPE_NEW_CARD, payload: { ...newItem.card, priority: event } } )}
                    />

                    <Button type="onSubmit">Concluir</Button>
                    <Button onClick={handleDrop}>Cancelar</Button>
                </Form>
            </Modal>
        </>
    );
}
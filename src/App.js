import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './Components/Header/Header'
import Table from './Components/Table/Table';
import Button from './Components/Button/Button';
import Form from './Components/Form/Forms';
import Input from './Components/Input/Input';
import TextArea from  './Components/TextArea/TextArea'
import Card from './Components/Card/Card';
import Modal from './Components/Modal/Modal';

import { collection } from './Components/defaultModel';
//import { properties } from './Components/defaultProperties';
import './App.css'

import { setItem, getItem } from './Components/localStorage'

function App(){

  const [storage, setStorage] = useState(JSON.parse(getItem('@kanban-web/collection', JSON.stringify(collection))) === null 
    ? collection : JSON.parse(getItem('@kanban-web/collection', collection))
  );

  const [newTable, setNewTable] = useState({name:'', position:'', cards:[]})

  const [newCard, setNewCard] = useState({ position:'' ,table:'', title: '', description: '', priority: 0, initial: '', final: '', properties : { color:"#FFFFFF" } }) 

  const [modalNew, setModalNew] = useState( {show:false, table: {...newTable}} )

  const [modalEdit, setModalEdit] = useState( {show:false, card: {...newCard}} )
  
  const handleChange = event => {
    event.preventDefault();

    if(event.target.name==='table'){
      setNewTable( {...newTable, name: event.target.value, position: storage.tables.length} );
    }
    else{
      setNewCard( {...newCard,
        title: event.target.name === 'title' ? event.target.value : newCard.title,
        description: event.target.name === 'description' ? event.target.value : newCard.description,
        priority: event.target.name === 'priority' ? event.target.value : newCard.priority,
        initial: event.target.name === 'dateInit' ? event.target.value : newCard.initial,
        final: event.target.name === 'dateEnd' ? event.target.value : newCard.final,
        properties: {color: event.target.name === 'color' ? event.target.value : newCard.properties.color}
      });
    }
  }

  const handleCard = event => {
    setModalEdit( {...modalEdit, card: {...modalEdit.card,
      title: event.target.name === 'title' ? event.target.value : modalEdit.card.title,
      description: event.target.name === 'description' ? event.target.value : modalEdit.card.description,
      priority: event.target.name === 'priority' ? event.target.value : modalEdit.card.priority,
      initial: event.target.name === 'dateInit' ? event.target.value : modalEdit.card.initial,
      final: event.target.name === 'dateEnd' ? event.target.value : modalEdit.card.final,
      properties: {color: event.target.name === 'color' ? event.target.value : modalEdit.card.properties.color}
    }});
  } 

  const addTable = event => {
    event.preventDefault();

    setStorage({ ...storage, metadata: storage.tables.length+1, tables: [...storage.tables, newTable]});

    setNewTable({name:'', position:'', cards:[]});
  }

  const removeTable = table => {
    let filtereds = storage.tables.filter(target => target.position !== table.position);

    filtereds.map((target, indice) => target.position = indice);

    setStorage({ ...storage, metadata: filtereds.length, tables: filtereds});
  }

  const onLeft = table => {
    if(table.position > 0){
      let from = {...table, position: (table.position-1), children: []};
      let to = storage.tables.filter(target => target.position === from.position)[0];

      to = {...to, position: to.position + 1 };

      let newOrder = storage.tables.filter(target => (target.position !== to.position && target.position !== from.position));

      newOrder = [...newOrder, from, to];

      order(newOrder);
      
      setStorage({...storage, tables: newOrder});

    }
  }

  const onRight = table => {
    if(table.position < storage.tables.length-1){
      let from = {...table, position: (table.position+1), children: []};
      let to = storage.tables.filter(target => target.position === from.position)[0];

      to = {...to, position: to.position-1 }

      let newOrder = storage.tables.filter(target => (target.position !== to.position && target.position !== from.position));

      newOrder = [...newOrder, from, to]

      order(newOrder)

      setStorage({...storage, tables: newOrder})
    }
  }

  const order = target => {
    target.sort((a,b) => {
      if(a.position > b.position){
        return 1;
      }
      if(a.position < b.position){
        return -1;
      }
      else {
        return 0;
      }
    })
  }

  const createCard = event => {
    event.preventDefault();

    if(modalNew.show) {
      let table = storage.tables.filter(target => target.name === modalNew.table.name)[0];

      let card = {...newCard, position: table.cards.length, table: table.name, };
      
      let filtereds = storage.tables.filter(target => target.name !== table.name);
     
      let updateCards = [...table.cards, card];
  
      let updateTable = {...table, cards: updateCards};
  
      filtereds = [...filtereds, updateTable];
  
      order(filtereds);
  
      setStorage( {...storage, tables: filtereds} );
  
      setNewCard( { position:'' ,table:'', title: '', description: '', priority: '', initial: '', final: '', properties : { color:'' } } );

      handleDrop();
    }
  }

  const removeCard = card => {

    let filterTable = storage.tables.filter(target => target.name !== card.table);

    let table = storage.tables.filter(target => target.name === card.table)[0];

    let updateCards = table.cards.filter(target => target.position !== card.position)

    table.cards= updateCards

    filterTable = [...filterTable, table]

    order(filterTable)

    setStorage({...storage, tables: filterTable})
  }

  const editCard = event => {
    event.preventDefault();

    let from = storage.tables.filter(target => target.name === modalEdit.card.table).pop();

    let filtereds = storage.tables.filter(target => target.name !== modalEdit.card.table);
    
    let card = from.cards.filter(target => target.position === modalEdit.card.position).pop();

    from = {...from, cards: from.cards.filter(target => target.position !== modalEdit.card.position)};
    
    card = {...modalEdit.card}

    let orderingCards = [...from.cards, card]

    order(orderingCards)

    from = {...from, cards: orderingCards}

    filtereds = [...filtereds, from]

    order(filtereds)

    setStorage({...storage, tables: filtereds})

    handleDrop();
  }
  
  const concluedCard = card => {
    let from = storage.tables.filter(target => target.name === card.table)[0];

    if(from.position < storage.tables.length-1) {
      let to = storage.tables.filter(target => target.position === from.position+1)[0];

      let tables = storage.tables.filter(target => target.name !== from.name && target.name !== to.name)
  
      from = {...from, cards: from.cards.filter(target => target !== card)}
  
      to = {...to, cards: [...to.cards, {...card, table: to.name, position: to.cards.length}]}
  
      tables = [...tables, from, to]
  
      order(tables)
  
      setStorage({...storage, tables: tables})
    }
  }

  const handleShow = target => {
    target.name
      ? setModalNew( {show: true, table: {...target}, card: {...newCard}} )
      : setModalEdit( {show: true, table: {...newTable}, card: {...target}} )
  }

  const handleDrop = () => {
    setModalNew( {show: false, table: {...newTable}, card: {...newCard}} );
    setModalEdit( {show: false, table: {...newTable}, card: {...newCard}} );
  }

  useEffect(() => setItem('@kanban-web/collection', JSON.stringify(storage)), [storage, setStorage])

  return (
    <>
      <Header/>
      <div className="container">
        <div className="tables">
          {storage.tables.map(table => (
            <Table
              key={uuidv4()} 
              name={table.name}
              position={table.position}
              cards={table.cards}
              onRemove={ [removeTable.bind(table), handleShow.bind(table)] }
              onDirection={ [onLeft.bind(table), onRight.bind(table)] }
            >
              {table.cards.map(card => {
                return (
                  <Card key={uuidv4()} card={{...card}}>
                    <Button value="&#9998;" onAction={handleShow.bind(this, card)}/>
                    <Button value="&#9745;" onAction={concluedCard.bind(this, card)}/>
                    <Button value="&#9746;" onAction={removeCard.bind(this, card)}/>
                    {/* <Button value="&#9746;" onAction={openCard.bind(this, card)}/> */}
                  </Card>
                );
              })}
              {table.cards.length <= 0 ? <div className="initial"> <Button value="+" onAction={handleShow.bind(this, table)}/> </div> : null}
            </Table>
          ))}
          <div className="newTable">

            <Form name="New Table" method="post" onSubmit={addTable.bind(newTable)} >
              <Input name="table" type="text" value={newTable.name} onChange={handleChange.bind(newTable)} required={true} />
              <Button value="Add Table" type="submit" />
            </Form>

          </div>
        </div>
        
        <div>
          <Modal show={modalNew.show} handleDrop={handleDrop} name="New Card">
            <Form method="post" onSubmit={createCard.bind(modalNew)}>
              
              <Input className="inputColor" type="color" name="color" value={newCard.properties.color} required={false} onChange={handleChange.bind(modalNew)}/>
              
              <Input className="input" label="Titulo" name="title" value={newCard.title} required={true} onChange={handleChange.bind(modalNew)}/>
              
              <TextArea className="textArea" style={{resize: 'none'}} size={{rows: '5', cols: '23'}} label="Descrição" name="description" value={newCard.description} required={true} onChange={handleChange.bind(modalNew)}/>
              
              <Input className="inputDate" type="date" label="Data Início" name="dateInit" value={newCard.initial} required={true} onChange={handleChange.bind(modalNew)}/>
              
              <Input className="inputDate" type="date" label="Previsão de Conclusão" name="dateEnd" value={newCard.final} required={false} onChange={handleChange.bind(modalNew)}/>
              
              <Input className="scrollRange" type="range" step={1} min={0} max={3} label={'Prioridade: '+newCard.priority} name="priority" value={newCard.priority} required={false} onChange={handleChange.bind(modalNew)}/>
              
              <div className="formButton">
                <Button value="Adicionar" type="onSubmit"/>
                <Button value="Cancelar" onAction={handleDrop}/>
              </div>

            </Form>
          </Modal>

          <Modal  show={modalEdit.show} handleDrop={handleDrop} name="Edit Card">
            <Form method="post" onSubmit={editCard.bind(modalNew)}>
              
              <Input className="inputColor" type="color" label="color" name="color" value={modalEdit.card.properties.color} required={false} onChange={handleCard.bind(modalEdit)}/>
              
              <Input className="input" label="Titulo" name="title" value={modalEdit.card.title} required={false} onChange={handleCard.bind(modalEdit)}/>
              
              <TextArea className="textArea" style={{resize: 'none'}} size={{rows: '5', cols: '23'}} label="Descrição" name="description" value={modalEdit.card.description} required={false} onChange={handleCard.bind(modalEdit)}/>

              <Input className="inputDate" type="date" label="Data Início" name="dateInit" value={modalEdit.card.initial} required={true} onChange={handleCard.bind(modalEdit)}/>
              
              <Input className="inputDate" type="date" label="Previsão de Conclusão" name="dateEnd" value={modalEdit.card.final} required={false} onChange={handleCard.bind(modalEdit)}/>
              
              <Input className="scrollRange" type="range" step={1} min={0} max={3} label={'Prioridade: '+modalEdit.card.priority} name="priority" value={modalEdit.card.priority} required={false} onChange={handleCard.bind(modalEdit)}/>
              
              <div className="formButton">
                <Button value="Editar" type="onSubmit"/>
                <Button value="Cancelar" onAction={handleDrop}/>
              </div>
              
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Table from './Components/Table/Table';
import Button from './Components/Button/Button';
import Form from './Components/Form/Forms';
import Input from './Components/Input/Input';
import TextArea from './Components/TextArea/TextArea';
import Card from './Components/Card/Card';
import Modal from './Components/Modal/Modal';

import { collection } from './Components/defaultModel';
import { properties } from './Components/defaultProperties';

import { setItem, getItem } from './Components/localStorage'

function App(){

  const [storage, setStorage] = useState(JSON.parse(getItem('@kanban-web/collection', JSON.stringify(collection))) === null 
    ? collection : JSON.parse(getItem('@kanban-web/collection', collection))
  );

  const [newTable, setNewTable] = useState({name:'', position:'', cards:[]})

  const [newCard, setNewCard] = useState({ position:'' ,table:'', title: '', description: '', priority: '', initial: '', final: '', properties : { color:'' } }) 

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
        priority: event.target.name === 'priority' ? event.target.value : newCard.priority
      });
    }
  }

  const handleCard = event => {
    setModalEdit( {...modalEdit, card: {...modalEdit.card,
      title: event.target.name === 'title' ? event.target.value : modalEdit.card.title,
      description: event.target.name === 'description' ? event.target.value : modalEdit.card.description,
      priority: event.target.name === 'priority' ? event.target.value : modalEdit.card.priority
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
  
      setNewCard( { ...newCard, title: '', description: '', priority: '', } );

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
    
    card = {
      ...card,
      title: modalEdit.card.title,
      description: modalEdit.card.description
    }

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

  useEffect(() => {setItem('@kanban-web/collection', JSON.stringify(storage))
  console.log(storage)}, [storage, setStorage])

  return (
    <>
      <div className="container">
        {storage.tables.map(table => (
          <Table key={uuidv4()} name={table.name} position={table.position}
            cards={table.cards} onRemove={[removeTable.bind(table), handleShow.bind(table)]}
            onDirection={[onLeft.bind(table), onRight.bind(table)]}
          >
           {table.cards.map(card => {
             return (
              <Card
                key={uuidv4()} 
                title={card.title}
                description={card.description} 
                properties={card.properties}
              >
                <Button value="&#9998;" onAction={handleShow.bind(this, card)}/>
                <Button value="&#9745;" onAction={concluedCard.bind(this, card)}/>
                <Button value="&#9746;" onAction={removeCard.bind(this, card)}/>
                
              </Card>
            );
          })}
            {table.cards.length <= 0 ? <Button value="+" onAction={handleShow.bind(this, table)}/> : null}
          </Table>
        ))}
        <Form name="New Table" className="newTable" method="post" onSubmit={addTable.bind(newTable)} >
          <Input name="table" type="text" value={newTable.name} onChange={handleChange.bind(newTable)} required={true} />
          <Button name="normal" value="Add Table" type="submit" />
        </Form>

        <Modal show={modalNew.show} handleDrop={handleDrop} name="New Card">
          <Form method="post" onSubmit={createCard.bind(modalNew)}>
              <Input name="title" value={newCard.title} required={true} onChange={handleChange.bind(modalNew)}/>
              <TextArea style={{resize: 'none'}} size='' name="description" value={newCard.description} required={true} onChange={handleChange.bind(modalNew)}/>
            <Button value="Add" type="onSubmit"/>
          </Form>
        </Modal>

        <Modal  show={modalEdit.show} handleDrop={handleDrop} name="Edit Card">
          <Form method="post" onSubmit={editCard.bind(modalNew)}>
            <Input name="title" value={modalEdit.card.title} required={false} onChange={handleCard.bind(modalEdit)}/>
            <Input name="description" value={modalEdit.card.description} required={false} onChange={handleCard.bind(modalEdit)}/>
            <Button value="Edit" type="onSubmit"/>
            <Button value="Cancel" onAction={handleDrop}/>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default App;
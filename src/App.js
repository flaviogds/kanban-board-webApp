import React, { Component } from 'react';
import Table from './Components/Table';
import Button from  './Components/Button';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {

  state = {
    reference: "",
    metadata: {
        total_tables: 0
    },
    tables: [
      {
        name: 'table_1',
        position: 0,
        cards: []
      },
      {
        name: 'table_2',
        position: 1,
        cards: []
      }
    ],
    newTable:
      {
        name: '',
        position:'',
        cards: []
      }
  }

  addTable = event => {
    event.preventDefault();
    this.setState({
      tables: [...this.state.tables, this.state.newTable],
      newTable : {name:'', position:'', cards:[]}
    })
  }

  handleChange = event => {
    this.setState({
      newTable: {
        ...this.state.newTable, 
        name: event.target.value, 
        position: this.state.tables.length
      }
    })
  }

  removeTable = table => {
    let filtereds = this.state.tables.filter(target => target !== table);

    filtereds.map((target, indice) => target.position = indice);

    this.setState({ ...this.state, tables: filtereds});

  }

  onLeft = table => {
    if(table.position > 0){
      let from = {...table, position: (table.position-1)};
      let to = this.state.tables.filter(target => target.position === from.position)[0];

      to = {...to, position: to.position + 1 };

      let newOrder = this.state.tables.filter(target => (target.position !== to.position && target.position !== from.position));

      newOrder = [...newOrder, from, to];

      this.order(newOrder);

      this.setState({...this.state, tables: newOrder});
    }
  }

  onRight = table => {
    if(table.position < this.state.tables.length-1){
      let from = {...table, position: (table.position+1)};
      let to = this.state.tables.filter(target => target.position === from.position)[0];

      to = {...to, position: to.position-1 }

      let newOrder = this.state.tables.filter(target => (target.position !== to.position && target.position !== from.position));

      newOrder = [...newOrder, from, to]

      this.order(newOrder)

      this.setState({...this.state, tables: newOrder})
    }
  }

  order = target => {
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

  createCard = table => {
    let newCard = {   
      title: "Card 45",
      description: "descrição",
      priority: "alta",
      initial: "datei",
      final: "datef",
      properties : {
        color:"#fff"
      }
    }
    
    let newTables = this.state.tables.filter(target => target !== table)

    let newTable = {...table, cards: table.cards.push(newCard)}
    
    newTables = this.order(newTables.push(newTable))

    this.setState({...this.state, tables: newTables})
  }

  removeCard = target => {

  }

  render(){
    return (
      <div className="container">
        {this.state.tables.map(table => (
          <Table
            key={uuidv4()}
            name={table.name}
            position={table.position}
            cards={table.cards}
            onRemove={this.removeTable.bind(this, table)}
            onDirection={[this.onLeft.bind(this, table), this.onRight.bind(this, table)]}
            onCard={[this.createCard.bind(this, table)]}
          />
        ))}
            
        <form className="newTable" method="post" onSubmit={this.addTable}>
          <h4>New Table</h4>
          <input
            type="text" 
            name="name"
            value={this.state.newTable.name}
            onChange={this.handleChange}
            required
          />
          <Button name="normal" value="Add Table" type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import DataApp from './Components/state/Data/DataProvider';

import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

import './App.css'

export default class App extends Component {
  render(){
    return (
      <DataApp>
  
        <Header>
          <NavBar/>
        </Header>
  
        <Body/>
      </DataApp>
    );
  }
}
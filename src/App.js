import React from 'react';
import DataApp from './Components/state/data/DataProvider'
import Modal from './Components/state/modal/ModalProvider'

import Body from './Components/Body/Body'
import Header from './Components/Header/Header'

import './App.css'

function App(){
  return (
    <DataApp>
      <Header/>
      <Modal>
        <Body/>
      </Modal>
    </DataApp>
  );
}

export default App;
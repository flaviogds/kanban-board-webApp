import React from 'react';
import ReactDOM from 'react-dom';
import DataApp from './Components/state/Data/DataProvider';
import App from './App';


ReactDOM.render(
  <DataApp>
    <App/>
    </DataApp>,
  document.getElementById('root')
);
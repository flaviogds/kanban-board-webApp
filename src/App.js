import React, { useState } from 'react';
import { MdAdd, MdDeleteForever, MdImportExport, MdInvertColors, MdSettings } from 'react-icons/md'
import DataApp from './Components/state/Data/DataProvider';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/global';
import themes from './Components/ThemeSelector/themes';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import NavItem from './Components/NavItem/NavItem';
import DropdownMenu from './Components/DropdownMenu/DropdownMenu';
import NewTable from './Components/NewTable/NewTable';
import Board from './Components/Board/Board';
import ThemeSelector from './Components/ThemeSelector/ThemeSelector'
import ResetStorage from './Components/Reset/Reset';
import IEFiles from './Components/IEFiles/IEFiles';

import { DropItem, Smooth } from './style'

export default function App(){

  const [ show, setShow ] = useState({modal: false, selector: {theme: false, iefile: false}});

  const [theme, setTheme] = useState(themes[0]);

  const selector = event => {
    event === 'Theme'
      ? setShow({modal: true, selector: {theme: true, iefiles: false}})
      : setShow({modal: true, selector: {theme: false, iefiles: true}})
  }

  const handleDrop = () => {
    setShow({...show, modal: false, selector: {theme: false, iefile: false}})
  }

  return (
    <ThemeProvider theme={theme}>
      <DataApp>
        <Header logo={'KANBAN BOARD'}>
          <Navbar>

            <NavItem icon={<MdAdd size={'5rem'}/>}>
              <DropdownMenu style={ { hover: false } }>
                  <NewTable/>
                  
              </DropdownMenu>
            </NavItem>

            <NavItem icon={<MdSettings size={'5rem'}/>}>
              <DropdownMenu style={ { hover: true } }>
                
              <DropItem onClick={() => selector('Theme')}>
                <MdInvertColors size={'2rem'} style={ {verticalAlign: 'middle'} }/>
                Temas
              </DropItem>

              <DropItem onClick={() => selector('IEFiles')}>
                <MdImportExport size={'2rem'} style={ {verticalAlign: 'middle'} }/>
                Importar/Exportar
              </DropItem>

              <DropItem onClick={''}>
                <MdDeleteForever size={'2rem'} style={ {verticalAlign: 'middle'} }/>
                <ResetStorage/>
              </DropItem>
      
              </DropdownMenu>
            </NavItem>
            
          </Navbar>
        </Header>
        
          <Board>
            {show.modal ? <Smooth onClick={handleDrop}></Smooth> : null}
            <IEFiles  open={show.selector.iefiles} close={handleDrop}/>
            <ThemeSelector open={show.selector.theme} current={theme} close={handleDrop} response={target => setTheme(target)}/>
          </Board>
      </DataApp>
      <GlobalStyle/>
    </ThemeProvider>
  );
}
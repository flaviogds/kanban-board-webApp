import React, { useContext, useState } from 'react';
import { Data } from './Components/state/Data/Data';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/global';
import themes from './Components/ThemeSelector/themes';
import { MdAdd, MdDeleteForever, MdImportExport, MdInfoOutline, MdInvertColors, MdSettings } from 'react-icons/md'

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import NavItem from './Components/NavItem/NavItem';
import DropdownMenu from './Components/DropdownMenu/DropdownMenu';
import NewTable from './Components/NewTable/NewTable';
import Board from './Components/Board/Board';
import ThemeSelector from './Components/ThemeSelector/ThemeSelector'
import ResetStorage from './Components/Reset/Reset';
import IEFiles from './Components/IEFiles/IEFiles';
import About from './Components/About/About';

import { DropItem, Smooth } from './style'


export default function App(){

  const [ show, setShow ] = useState({modal: false, selector: {theme: false, iefile: false, about: false}});

  const { data, setData } = useContext(Data);

  const selector = event => {
    switch (event){
      case 'About':
        setShow({modal: true, selector: {theme: false, iefiles: false, about: true}});
        break;
      case 'Theme':
        setShow({modal: true, selector: {theme: true, iefiles: false, about: false}});
        break;
      case 'IEFiles':
        setShow({modal: true, selector: {theme: false, iefiles: true, about: false}});
        break;
      default:
        throw Error;
    }
  }

  const handleDrop = () => {
    setShow({...show, modal: false, selector: {theme: false, iefile: false, about: false}});
  }

  return (
    <ThemeProvider theme={themes[data.metadata.theme]}>

      <Header logo={'KANBAN BOARD'}>
        <Navbar>

          <NavItem icon={<MdAdd size={50}/>}>
            <DropdownMenu style={ { hover: false } }>
                <NewTable/>
                
            </DropdownMenu>
          </NavItem>

          <NavItem icon={<MdSettings size={50}/>}>
            <DropdownMenu style={ { hover: true } }>
              
            <DropItem onClick={() => selector('Theme')}>
              <MdInvertColors size={30} style={ {verticalAlign: 'middle'} }/>
              Temas
            </DropItem>

            <DropItem onClick={() => selector('IEFiles')}>
              <MdImportExport size={30} style={ {verticalAlign: 'middle'} }/>
              Importar/Exportar
            </DropItem>

            <DropItem>
              <MdDeleteForever size={30} style={ {verticalAlign: 'middle'} }/>
              <ResetStorage/>
            </DropItem>

            <DropItem onClick={() => selector('About')}>
              <MdInfoOutline  size={30} style={ {verticalAlign: 'middle'} }/>
              Sobre
            </DropItem>
    
            </DropdownMenu>
          </NavItem>
          
        </Navbar>
      </Header>
      
      <Board>
        {show.modal ? <Smooth onClick={handleDrop}></Smooth> : null}

        <IEFiles
          open={show.selector.iefiles} 
          close={handleDrop}
        />

        <ThemeSelector
          open={show.selector.theme}
          current={data.metadata.theme}
          close={handleDrop}
          response={target => setData({...data, metadata: {...data.metadata, theme: target}})}
        />

        <About open={show.selector.about} close={handleDrop}/>
      </Board>
      
      <GlobalStyle/>
    </ThemeProvider>
  );
}
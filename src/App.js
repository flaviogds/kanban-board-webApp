import React, { Component } from 'react';
import { MdAdd, MdDeleteForever, MdImportExport, MdInvertColors, MdSettings } from 'react-icons/md'
import DataApp from './Components/state/Data/DataProvider';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './Styles/global';
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import NavItem from './Components/NavItem/NavItem';
import DropdownMenu from './Components/DropdownMenu/DropdownMenu';
import DropdownItem from './Components/DropdownItem/DropdownItem';
import NewTable from './Components/NewTable/NewTable';
import Board from './Components/Board/Board';
import ThemeSelector from './Components/ThemeSelector/ThemeSelector'
import ResetStorage from './Components/Reset/Reset';
import InOutFiles from './Components/InOutFiles/InOutFiles';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = ({light: false})
  }

  render(){
    return (
      <ThemeProvider theme={this.state.light ? light : dark }>
        <DataApp>
          <Header logo={'KANBAN BOARD'}>
            <Navbar>

              <NavItem icon={<MdAdd size={'2rem'}/>}>
                <DropdownMenu>
                  <DropdownItem hover={false}>
                    <NewTable/>
                  </DropdownItem>
                </DropdownMenu>
              </NavItem>

              <NavItem icon={<MdSettings size={'2rem'}/>}>
                <DropdownMenu>
                  <DropdownItem hover={true}>
                    <MdInvertColors style={ { verticalAlign: 'middle' } } size={'2rem'}/>
                    <ThemeSelector/>
                  </DropdownItem>
                  <DropdownItem hover={true}>
                    <MdImportExport style={ { verticalAlign: 'middle' } } size={'2rem'}/>
                    <InOutFiles/>
                  </DropdownItem>

                  <DropdownItem hover={true}>
                    <MdDeleteForever style={ { verticalAlign: 'middle' } } size={'2rem'}/>
                    <ResetStorage/>
                  </DropdownItem>
                </DropdownMenu>
              </NavItem>
              
            </Navbar>
          </Header>
          
            <Board/>
        </DataApp>
        <GlobalStyle/>
      </ThemeProvider>
    );
  }
}
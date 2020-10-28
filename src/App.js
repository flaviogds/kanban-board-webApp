import React, { Component } from 'react';
import DataApp from './Components/state/Data/DataProvider';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './Styles/global';
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import NavItem from './Components/NavItem/NavItem';
import DropdownMenu from './Components/DropdownMenu/DropdownMenu';
import Switch from './Components/Switch/Switch';
import NewTable from './Components/NewTable/NewTable';
import Board from './Components/Board/Board';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = ({light: false})
  }

  render(){
    return (
      <ThemeProvider theme={this.state.light ? light : dark }>
        <DataApp>
          <Header logo="LOGO">
            <Navbar>

              <NavItem icon="+">
                <DropdownMenu>
                  <NewTable/>
                </DropdownMenu>
              </NavItem>

              <NavItem icon="M">
                <DropdownMenu>
                  <Switch onAction={() => this.setState({light: !this.state.light})}/>
                </DropdownMenu>
              </NavItem>

              <NavItem icon="U">
                <DropdownMenu>

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
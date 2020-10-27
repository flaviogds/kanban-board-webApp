import React, { Component } from 'react';
import DataApp from './Components/state/Data/DataProvider';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './Styles/global';
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';

import Body from './Components/Body/Body';
import Navbar from './Components/Navbar/Navbar';
import NavItem from './Components/NavItem/NavItem';
import DropdownMenu from './Components/DropdownMenu/DropdownMenu';
import DropdownItem from './Components/DropdownItem/DropdownItem';
import Switch from './Components/Switch/Switch';

import './App.css'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = ({light: true})
  }

  render(){
    return (
      <ThemeProvider theme={this.state.light ? light : dark }>
        <DataApp>
            <Navbar>
              <NavItem icon="MENU">
                <DropdownMenu>
                  <DropdownItem>
                    <Switch onAction={() => this.setState({light: !this.state.light})}/>
                  </DropdownItem>
                </DropdownMenu>
              </NavItem>
            </Navbar>

            <Body/>
        </DataApp>
        <GlobalStyle/>
      </ThemeProvider>
    );
  }
}
import React, { Component } from 'react';
import { MdAdd, MdBuild } from 'react-icons/md'
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
          <Header logo="">
            <Navbar>

              <NavItem icon={<MdAdd/>}>
                <DropdownMenu>
                  <DropdownItem hover={false}>
                    <NewTable/>
                  </DropdownItem>
                </DropdownMenu>
              </NavItem>

              <NavItem icon={<MdBuild/>}>
                <DropdownMenu>
                  <DropdownItem>
                    <Switch onAction={() => this.setState({light: !this.state.light})}/>
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
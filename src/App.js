import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './components/TitleBar.js';
import FlatButton from 'material-ui/FlatButton';
import GridListExampleSimple from './components/GridList'
import DrawerSimpleExample from './components/Drawer'

export default class App extends React.Component{
  render(){

    return(

      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <TitleBar title="Logger Dashboard" />
          <DrawerSimpleExample />
         <GridListExampleSimple />
        </div>
      </MuiThemeProvider>

    );
  }
}

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './components/TitleBar.js';
import ErrorContainer  from './components/ErrorContainer.js'
import SearchBar from 'material-ui/TextField'


 export default class App extends React.Component{

  render(){

    return(

      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <TitleBar title="Logger Analytics Dashboard" />
          <SearchBar hintText="Enter status code to search for logs" />
        <ErrorContainer source='http://localhost:7770/logs'/>
        </div>
      </MuiThemeProvider>

    );
  }
}

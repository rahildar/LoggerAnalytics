import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './components/TitleBar.js';
import ErrorPaper from './components/ErrorPaper.js'
import FlatButton from 'material-ui/FlatButton';
//import ErrorContainer from './components/ErrorContainer.js'
var error1 ={
  errorCode:'404',
  timestamp:'2016-08-10T05:08:38.128Z',
  method: 'GET',
  httpVersion: '1.1',
  url:'/',
  userAgent:'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
  hostname:'DELL'
}
var error2 ={
  errorCode:'200',
  timestamp:'2016-08-10T05:08:38.128Z',
  method: 'GET',
  httpVersion: '1.1',
  url:'/',
  userAgent:'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
  hostname:'HP'

}
var error3 ={
  errorCode:'301',
  timestamp:'2016-08-10T05:08:38.128Z',
  method: 'GET',
  httpVersion: '1.1',
  url:'/',
  userAgent:'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
  hostname:'HP'

}
 export default class App extends React.Component{

  render(){

    return(

      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <TitleBar title="Logger Analytics Dashboard" />
          <ErrorPaper error={error1}/>
          <ErrorPaper error={error2}/>
          <ErrorPaper error={error3}/>
        </div>
      </MuiThemeProvider>

    );
  }
}

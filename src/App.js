import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './components/TitleBar.js';
import ErrorContainer  from './components/ErrorContainer.js';

// import PieChart from './components/PieChart.js'
import { BarChart } from 'react-d3';
// var BarChart = rd3.BarChart;



 export default class App extends React.Component{

  render(){
    var barData = [
      {label: 'A', value: 5},
      {label: 'B', value: 6},
      {label: 'F', value: 7}
    ];
    return(

      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <TitleBar title="Logger Analytics Dashboard" />
            
          <ErrorContainer source='http://localhost:7770/logs'/>
        </div>
      </MuiThemeProvider>

    );
  }
}

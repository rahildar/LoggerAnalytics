import React, {Component} from 'react';
import Paper from 'material-ui/Paper'

function getColor(errorCode){
  var color;
  switch(errorCode){
    case '404': color = 'orange';
                break;
    case '200': color = '#9CCC65';
                break;

    default: color='yellow'
                break;
  }
  return color;
}

export default class ErrorPaper extends React.Component{
  render(){
    const errorStyle ={
     width: "20%",
     display: 'inline-block',
     margin:5,
     paddingLeft:5,
     'background-color': getColor(this.props.error.errorCode)
    }
    return(
      <Paper zDepth={3} style={errorStyle} >
        <h5>Error Code: {this.props.error.errorCode} </h5>
        <h6>Time : {this.props.error.timestamp}</h6>
        <h6>Method : {this.props.error.method}</h6>
        <h6>Http Version : {this.props.error.httpVersion}</h6>
        <h6>Url : {this.props.error.url}</h6>
        <h6>User Agent : {this.props.error.userAgent}</h6>
        <h6>Hostname : {this.props.error.hostname}</h6>
       </Paper>
    );
  }
  static   get defaultProps() {
    return {
      error:{
        errorCode:'404',
        timestamp:'2016-08-10T05:08:38.128Z',
        method: 'GET',
        httpVersion: '1.1',
        url:'/',
        userAgent:'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
        hostname:'DELL'
      }
    };
  }
}

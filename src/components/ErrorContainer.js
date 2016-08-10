import React,{Component} from 'react';

var dummyData =[
  {
    errorCode:'404',
    timestamp:'2016-08-10T05:08:38.128Z',
    method: 'GET',
    httpVersion: '1.1',
    url:'/',
    userAgent:'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
    hostname:'DELL'
  },
  {
    errorCode:'200',
    timestamp:'2016-08-10T05:08:38.128Z',
    method: 'GET',
    httpVersion: '1.1',
    url:'/',
    userAgent:'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
    hostname:'HP'

  },
  {
    errorCode:'301',
    timestamp:'2016-08-10T05:08:38.128Z',
    method: 'GET',
    httpVersion: '1.1',
    url:'/',
    userAgent:'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
    hostname:'HP'

  }
];

import React, { PropTypes } from 'react'

const ErrorContainer  = React.createClass({
  constructor(props){
    super(props);
    this.state.errors  = dummyData;
  }
  render () {
    return (
      {this.state.errors}
    )
  }
})

export default ErrorContainer

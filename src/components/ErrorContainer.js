import React,{Component} from 'react';
import ErrorPaper from './ErrorPaper.js'
import $ from 'jquery'
import axios from 'axios'

  var errorArray = [];
 var keyNumber=0;
var myData;

 export default class ErrorContainer extends React.Component{
   constructor(props){
     super();
     this.state ={
       errorData:[]
     }
   }
   componentWillMount(){

    var _this = this;
    this.serverRequest =
      axios
        .get(this.props.source)
        .then(function(result) {
          myData = result.data
              errorArray = myData.map(function(error){ 
               return(<ErrorPaper key={keyNumber++}  error={error}/>)
             })
             _this.setState({errorData:errorArray})
          });

   }
   componentDidMount(){
     console.log(myData);
   }
     render(){
      return(
        <div>{this.state.errorData}</div>
      )
    }
   }

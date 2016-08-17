import React,{Component} from 'react';
import ErrorPaper from './ErrorPaper.js'
import $ from 'jquery'
import axios from 'axios'
import SearchBar from 'material-ui/TextField'
import {PieChart} from 'react-easy-chart';
  var errorArray = [];
 var keyNumber=0;
var myData;

function DisplayPieChart(props) {
console.log("fffffffffffffffffffff" ,props.data);

var a=errorCount(props.data);

console.log('aaaaaa',a);
 return <PieChart
  data={[
    {key: '200', value: a[0], color: 'green'},
    {key: '500', value: a[1], color: 'maroon'},
    {key: '404', value: a[2], color: '#e3a51a'}
  ]}
/>
}

function errorCount(data) {
var count200=0;
var count500=0;
var count404=0;
  for (var i = 0; i < data.length; i++) {
    if(data[i]['status-code']=="200"){
      count200++;
    }
    else if(data[i]['status-code']=="404")
    {
      count404++;
    }
    else {
      count500++;
    }
  }
  return [count200,count404,count500];
}
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
             errorArray.push((<DisplayPieChart data = {myData}/>))
             console.log("EEEEEEEEEEEEEEEEEEE",errorArray);

             _this.setState({errorData:errorArray})
          });

   }

   onKeyDown(e){
     //console.log(e.keyCode)
    //  console.log(this.state.errorData)
    if(e.keyCode===13){
      var filteredData = myData.filter(function(logObj){
         var flag = false;
         for(var key of Object.keys(logObj)){
           console.log("key is: "+logObj[key])
           if(logObj[key].toString().indexOf(e.target.value)>-1){
             flag = true;
           }
         }
         return flag;


      //  return value["status-code"].indexOf(e.target.value)>-1?true:false
      })

     errorArray = filteredData.map(function(error){
      return(<ErrorPaper key={keyNumber++}  error={error}/>)
    })
    this.setState({errorData:errorArray})
    }
      // this.state.errorData.forEach(function(error){
    //    if(error["status-code"].indexOf(e.target.value)>-1){
    //      return(<ErrorPaper key={keyNumber++} error={error})
    //    }
    //  })
  }
     render(){
      return(
        <div>

        <div>
        <SearchBar onKeyDown={this.onKeyDown.bind(this)} hintText="Enter status code to search for logs"    />
        </div>
        <div>
        {this.state.errorData}
        </div>
        </div>
      )
    }
   }

import React,{Component} from 'react';
import ErrorPaper from './ErrorPaper.js'
import axios from 'axios'
import SearchBar from 'material-ui/TextField'
import {PieChart} from 'react-easy-chart';

 var keyNumber=0;
var myData;

const styleSearchBar={
  width:"60%"
}

function DisplayPieChart(props) {

var a=errorCount(props.data);

 return <PieChart
  data={[
    {key: '200', value: a[0], color: 'green'},
    {key: '500', value: a[1], color: '#e3a51a'},
    {key: '404', value: a[2], color: 'maroon'}
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
var initialData;
 export default class ErrorContainer extends React.Component{
   constructor(props){
     super();
     this.state ={
       errorData:[],

     }
   }
   componentWillMount(){

    var _this = this;
    this.serverRequest =
      axios
        .get(this.props.source)
        .then(function(result) {
          myData = result.data
            var errorArray = myData.map(function(error){
               return(<ErrorPaper key={keyNumber++}  error={error}/>)
             })
             errorArray.push((<DisplayPieChart data = {myData}/>))
             _this.setState({errorData:errorArray})
             initialData = _this.state.errorData;


          });

   }
   onKeyDown(e){
    if(e.keyCode===13){
      var filteredData = myData.filter(function(logObj){
         var flag = false;
         for(var key of Object.keys(logObj)){

           if(logObj[key].toString().indexOf(e.target.value)>-1){
             flag = true;
           }
         }
         return flag;
      })

     var errorArray = filteredData.map(function(error){
      return(<ErrorPaper key={keyNumber++}  error={error}/>)
    })
    this.setState({errorData:errorArray})
    }

  }
  onChange(e){
         if(e.target.value==''){
          console.log(initialData.length)
          this.setState({errorData:initialData})
        }
  }
     render(){
      return(
        <div>

        <div>
        <SearchBar onKeyDown={this.onKeyDown.bind(this)} onChange={this.onChange.bind(this)} style={styleSearchBar} hintText="Enter status code to search for logs and press enter"    />
        </div>
        <div>
        {this.state.errorData}
        </div>
        </div>
      )
    }
   }

import React from 'react';

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

class Next extends React.Component{
  state ={
    options:[],
    selectedOption: undefined
  }


  handleDeleteOption =(optionToRemove)=>{
   this.setState((prevState)=>({
     options: prevState.options.filter((option)=>{
       return optionToRemove !== option
     })
   }))
  }

   handleDeleteOptions =()=>{
     this.setState(() =>  ({  options:[]}));
   }

  handlePick=()=>{
    const rand = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rand];
    console.log(option);
    this.setState(()=>({selectedOption: option}))
  }

  handleAddOption =(option)=>{
    if(!option){
      return 'enter a vaid item'
    }
    else if (this.state.options.indexOf(option) > -1){
      return 'this already exists'
    }
    this.setState((prevState)=> ({options:prevState.options.concat(option)}))
  }







componentDidMount(){

  try{
    const json = localStorage.getItem('options')
    const options = JSON.parse(json);
    if(options){
      this.setState(() => ({ options }))
    }
  }
  catch(e){
  }
}

componentDidUpdate(prevProps, prevState){
 if(prevState.options.length !== this.state.options.length){
   const json = JSON.stringify(this.state.options)
   localStorage.setItem('options', json)
 }
}
 render(){
   return(
     <div className = "container">

         <Action
       hasOptions={this.state.options.length > 0}

       handlePick={this.handlePick}
       />
          <p className="option__text" style={{color:"white"}}>{this.state.selectedOption && this.state.selectedOption}</p>
   <div className="widget">
      <Options
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption handleAddOption={this.handleAddOption} />
    </div>



     </div>
   )
 }

}

export default Next

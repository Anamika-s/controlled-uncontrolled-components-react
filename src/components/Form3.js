// controlled components
// here the state of form elements is mantained by React itself
// state 
// class comp > state 
// function comp > useState() 

import React, { Component } from 'react'

export default class Form3 extends Component {
    state=
    {
        name:"",
        email:"",
        phone :"",
        comments:"please enter some comments"
    }
    render() {
    return (
      <div>
        <form>
        <div>
            <label> Name </label>
    
<input type="text" value={this.state.name}
   name="name" placeholder='enter name' onChange={(e)=>this.setState({name:e.target.value})}/>
          
        </div>
        <div>
            <label> Enter Email </label>
          
<input type="email" value={this.state.email}
      name="email" onChange={(e)=>this.setState({email:e.target.value})}/>
          
       </div>

        <div>
            <label> Enter Phone Number </label>
         
<input type="text" value={this.state.phone}
    name="phone" onChange={(e)=>this.setState({phone:e.target.value})}/>
          
        </div>

        <div>
            <label> Enter Comments </label>
          
<textarea value={this.state.comments}
  name="comments"  onChange={(e)=>this.setState({comments:e.target.value})}/>
          
        </div>


        </form>

      </div>
    )
  }
}

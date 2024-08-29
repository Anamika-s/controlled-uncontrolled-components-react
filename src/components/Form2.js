// controlled components
// here the state of form elements is mantained by React itself
// state 
// class comp > state 
// function comp > useState() 

import React, { Component } from 'react'

export default class Form2 extends Component {
    state=
    {
        name:"Jay",
        email:"jay@gmail.com",
        phone :"12345667878",
        comments:"please enter some comments"
    }
    handleChange=(e)=>
    {
        console.log(e.target.name)
        console.log(e.target.value)
    this.setState({[e.target.name]:e.target.value});
    }
    render() {
    return (
      <div>
        <form>
        <div>
            <label> Name </label>
    
<input type="text" value={this.state.name}
   name="name"         onChange={this.handleChange}/>
          
        </div>
        <div>
            <label> Enter Email </label>
          
<input type="email" value={this.state.email}
      name="email"      onChange={this.handleChange}/>
          
        </div>

        <div>
            <label> Enter Phone Number </label>
         
<input type="text" value={this.state.phone}
    name="phone"        onChange={this.handleChange}/>
          
        </div>

        <div>
            <label> Enter Comments </label>
          
<textarea value={this.state.comments}
  name="comments"          onChange={this.handleChange}/>
          
        </div>


        </form>

      </div>
    )
  }
}

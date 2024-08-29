// controlled components
// here the state of form elements is mantained by React itself
// state 
// class comp > state 
// function comp > useState() 

import React, { Component } from 'react'

export default class Form1 extends Component {
    state=
    {
        name:"Jay",
        email:"jay@gmail.com",
        phone :"12345667878",
        comments:"please enter some comments"
    }
    updateName=(e)=>
    {
        console.log(e);
        console.log(e.target)
        console.log(e.target.value)
    this.setState({name:e.target.value});
    }
    updateEmail=(e)=>
        {
            console.log(e);
            console.log(e.target)
            console.log(e.target.value)
        this.setState({email:e.target.value});
        } 
    updatePhone=(e)=>
            {
                console.log(e);
                console.log(e.target)
                console.log(e.target.value)
            this.setState({phone:e.target.value});
            } 
    updateComments=(e)=>
                {
                    console.log(e);
                    console.log(e.target)
                    console.log(e.target.value)
                this.setState({comments:e.target.value});
                }
   SubmitData= (event)=>
{  event.preventDefault();
    //    console.log(this.state.name + " " +  this.state.email)
//  console.log(`Details are ${this.state.name} ${this.state.phone} ${this.state.email} ${this.state.comments}`);
  console.log(JSON.stringify(this.state));
}
  render() {
    return (
      <div>
        <form onSubmit={this.SubmitData}>
        <div>
            <label> Name </label>
            {/* <input type='text' value="Jay"/>  */}
            {/* <input type="text" value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}/>
             */}

<input type="text" value={this.state.name}
            onChange={this.updateName}/>
          
        </div>
        <div>
            <label> Enter Email </label>
            {/* <input type='text' value="Jay"/>  */}
            {/* <input type="text" value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}/>
             */}

<input type="email" value={this.state.email}
            onChange={this.updateEmail}/>
          
        </div>

        <div>
            <label> Enter Phone Number </label>
            {/* <input type='text' value="Jay"/>  */}
            {/* <input type="text" value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}/>
             */}

<input type="text" value={this.state.phone}
            onChange={this.updatePhone}/>
          
        </div>

        <div>
            <label> Enter Comments </label>
            {/* <input type='text' value="Jay"/>  */}
            {/* <input type="text" value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}/>
             */}

<textarea value={this.state.comments}
            onChange={this.updateComments}/>
          
        </div>
<div>
    <button type='submit'> Submit </button>
</div>

        </form>

      </div>
    )
  }
}

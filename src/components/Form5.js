import React, { Component } from 'react'

export default class Form5 extends Component {

    /**
     *
     */
    constructor() {
        super();
        this.name = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
        this.comments = React.createRef();
    }
   SubmitData=(event)=>
   {
    event.preventDefault();
    console.log(this.name.current.value);
    
    console.log(this.email.current.value);
    
    console.log(this.phone.current.value);
    
    console.log(this.comments.current.value);
   }
  render() {
    return (
      <div>
<form onSubmit={this.SubmitData}>
    <div>
    <label> Enter Name </label>
    <input type='text'  ref={this.name}/>
    </div>

    <div>
    <label> Enter Email </label>
    <input type='text'  ref={this.email}/>
    </div>

    <div>
    <label> Enter Phone </label>
    <input type='text'  ref={this.phone}/>
    </div>

    <div>
    <label> Enter comments </label>
    <textarea   ref={this.comments}/>
    </div>
    <button type='submit'> Submit Data </button>
</form>

      </div>
    )
  }
}

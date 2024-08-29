// controlled components
// here the state of form elements is mantained by React itself
// state 
// class comp > state 
// function comp > useState() 

import React, { useState } from 'react'

export const Form4 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");

  const SubmitData=(event)=>
  {
    event.preventDefault();
    console.log(name + " " + email)
  }
  return (
    <div> 
  <form onSubmit={SubmitData}>
        <div>
            <label> Name </label>
    
<input type="text" value={name}
   name="name" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
          
        </div>
        <div>
            <label> Enter Email </label>
          
<input type="email" value={email}
      name="email" onChange={(e)=>setEmail(e.target.value)}/>
          
       </div>

        <div>
            <label> Enter Phone Number </label>
         
<input type="text" value={phone}
    name="phone" onChange={(e)=>setPhone(e.target.value)}/>
          
        </div>

        <div>
            <label> Enter Comments </label>
          
<textarea value={comments}
  name="comments"  onChange={(e)=>setComments(e.target.value)}/>
          
        </div>

 <button type="submit"> Submit Data </button>
        </form>


    </div>
  )
}


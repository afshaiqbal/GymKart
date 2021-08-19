import React from 'react'


const SignIn=()=>{

    return(
        <div className="container">
            <div className="sign in">
              <h3>Login</h3>
              <input type="email" placeholder="Email"></input><br></br>
              <input type="password" placeholder="Passowrd"></input><br></br>
              <button>Login</button>
              </div>
              <div className="sign up">
                <h3>Create Account</h3>
                <input type="text" placeholder="name"></input><br></br>
                <input type="email" placeholder="Email"></input><br></br>
                <input type="password" placeholder="Passowrd"></input><br></br>
                <button>Signup</button>
                </div>
        </div>
    )
}
export default SignIn;
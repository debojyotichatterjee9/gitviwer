import React, { Component } from 'react';

const Login = props => (
    <nav>
      <h2>Application Login</h2>
      <p>Sign in to the application.</p>
      <button  onClick={() => props.authenticate("Github")}>
        Log In With GitHub
      </button>
      
    </nav>
  );
  
  export default Login;
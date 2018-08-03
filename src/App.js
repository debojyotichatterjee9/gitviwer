import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import View from "./View.js";

class App extends Component {
  
state ={
  user: {}
}

getUser = () =>{
  const name = this.refs.name.value;
  //alert(name);
  fetch(`http://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
      user: {
        avatar: data.avatar_url,
        id: data.id,
        name: data.name,
        location: data.location,
        company: data.company,
        email: data.email,
        public_repos: data.public_repos,
        public_gists: data.public_gists,
        followers: data.followers,
        following: data.following,
        hireable: data.hireable,
        bio: data.bio,
        url: data.html_url
        
      }
    })
    })
  
    
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GitHub Viewer</h1>
        </header>
        <p className="App-intro">
        <code>To get started, enter <b>a profile name</b> below and click the View button.</code>
        </p>
        <input type="text" placeholder="Type here..." ref="name"/>
        <button onClick={this.getUser}>View</button>
        <View user={this.state.user} />
      </div>
    );
  }
}

export default App;

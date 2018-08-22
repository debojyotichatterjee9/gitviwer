import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import './App.css';
import View from "./View.js";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth.js";



firebase.initializeApp({
  apiKey: "AIzaSyC2pq8pKov9QQUmWuQ6yKf3sSumJES_bHo",
    authDomain: "gitviewer-df26d.firebaseapp.com"
})

class App extends Component {
  
state ={
  isSignedIn: false,
  user: {}
}
uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: () => false
  }
}

componentDidMount = () =>{
  
  firebase.auth().onAuthStateChanged(user => {
    this.setState({isSignedIn: !!user })
    console.log("user", user);
  })
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
        {this.state.isSignedIn ? (
        <div className="container">   
        <div className="wrapper">    
        <figure>
        <img className="img-thumbnail m-2" src={firebase.auth().currentUser.photoURL} alt="Not found"/>
        </figure>
        <h3 className="font-weight-light">Welcome {firebase.auth().currentUser.displayName}!!</h3>
        <p><code>To get started, enter <b>a profile name</b> below and click the View button.</code></p>
        <input className="m-3" type="text" placeholder="Type here..." ref="name"/>
        <div>
        <button className="btn btn-success mr-2" onClick={this.getUser}>View</button>
        <button className="btn btn-danger ml-2" onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </div>
        <View user={this.state.user} />
        </div>
        </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          // <div>Not Signed in</div>
        )}
      </div>
    );
    
  }
}

export default App;

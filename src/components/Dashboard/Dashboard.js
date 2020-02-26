import React, { Component } from 'react';
import firebase from 'firebase';
// import defaultUserImage from '../../assets/images/defaultUserImage';
import View from '../../components/View/View'

export default class Dashboard extends Component {
    render() {
        return(
            <div className="container">   
        <div className="wrapper">
        <figure>
        <img className="img-thumbnail m-2" src={firebase.auth().currentUser.photoURL ? firebase.auth().currentUser.photoURL : '../../assets/images/defaultUserImage'} alt="No Image"/>
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
        )
    }
}


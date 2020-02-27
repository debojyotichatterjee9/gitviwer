import React, { Component } from 'react';
import firebase from 'firebase';
import defaultUserImage from '../../assets/images/defaultUser.png';
import View from '../../components/View/View'
import './style.css'

export default class Dashboard extends Component {
    state = {
        user: {}
    }
    getUser = () => {
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
            <div className="container">
                <div className="wrapper">
                    <figure>
                        <img className="userThumbnail img-thumbnail rounded-circle img-fluid. max-width: 100%" src={firebase.auth().currentUser.photoURL ? firebase.auth().currentUser.photoURL : defaultUserImage} alt="No Image" />
                    </figure>
                    <h3 className="welcomeText">Welcome {firebase.auth().currentUser.displayName}!!</h3>
                    <p><code>To get started, enter <b>a profile name</b> below and click the View button.</code></p>
                    <input className="m-3" type="text" placeholder="Type here..." ref="name" />
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


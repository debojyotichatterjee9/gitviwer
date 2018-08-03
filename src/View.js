import React, { Component } from 'react';
import Linkify from 'react-linkify';
import Bulma from 'bulma';


class View extends Component {

    
    render(){
       
        const { user } = this.props;
   
        if(!this.props.user.id)
        { return <h3>Please enter a correct username to search...</h3>; }
          
        return(
            <div>
                <h3>User Details:</h3>
                <image className="is-rounded" src={user.avatar_url} alt="Not found"/>
                <h3>ID: {user.id}</h3>
                <h3>Name: {user.name}</h3>
                <h3>Location: {user.location}</h3>
                <h3>Comapany: {user.company}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Public Repos: {user.public_repos}</h3>
                <h3>Public Gists: {user.public_gists}</h3>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
                {/* <h3>Hireable: JSON.stringify({user.hireable})</h3> */}
                <h3>Bio: {user.bio}</h3>
                <Linkify properties={{target: '_blank', style: {color: 'red', fontWeight: 'bold'}}}>
                See full profile at {user.url}.</Linkify>
                               
            </div>
        )
    }
}

export default View;
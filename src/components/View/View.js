import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './style.css'



class View extends Component {


    render() {

        const { user } = this.props;

        if (!this.props.user.id) { return <h3 className="infoText font-weight-light">To get started, please enter a correct username to search...</h3>; }

        return (
            <div>
                <h3>User Details:</h3>
                <image src={user.avatar_url} alt="Not found" />
                <h4 className="font-weight-light">ID: {user.id}</h4>
                <h4 className="font-weight-light">Name: {user.name}</h4>
                <h4 className="font-weight-light">Location: {user.location}</h4>
                <h4 className="font-weight-light">Comapany: {user.company}</h4>
                <h4 className="font-weight-light">Email: {user.email}</h4>
                <h4 className="font-weight-light">Public Repos: {user.public_repos}</h4>
                <h4 className="font-weight-light">Public Gists: {user.public_gists}</h4>
                <h4 className="font-weight-light">Followers: {user.followers}</h4>
                <h4 className="font-weight-light">Following: {user.following}</h4>
                {/* <h3>Hireable: JSON.stringify({user.hireable})</h3> */}
                <h4 className="font-weight-light">Bio: {user.bio}</h4>
                <Linkify properties={{ target: '_blank', style: { color: 'red', fontWeight: 'bold' } }}>
                    See full profile at {user.url}.</Linkify>

            </div>
        )
    }
}

export default View;
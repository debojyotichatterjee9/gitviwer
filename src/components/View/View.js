import React, { Component } from 'react';
import Linkify from 'react-linkify';
import './style.css'
import defaultUserImage from '../../assets/images/defaultUser1.png'



class View extends Component {

    state = {
        user : ''
    }
    render() {

        let { user } = this.props;

        if (!user.id) {
            return (
                <div>
                    <h5 className="mx-auto infoText font-weight-light">To get started, please enter a correct username to search...</h5>

                    


                    </div>
                    )
                }
                else {
                    return (
                        <div>
            
            <div className="viewCard mx-auto card" style={{width: 18 + 'rem'}}>
                                    <img src={user.avatar ? user.avatar : defaultUserImage} className="card-img-top" alt="No Image Found"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{!user.bio ? 'Checkout this amazing user!' : user.bio}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">ID: {user.id}</li>
                                            <li className="list-group-item">Location: {user.location}</li>
                                            <li className="list-group-item">Comapany: {user.company}</li>
                                            <li className="list-group-item">Hireable: {user.hireable ? 
                                            <svg className="bi bi-check-circle text-success" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"></path>
                                            <path fillRule="evenodd" d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 0010 4.5z" clipRule="evenodd"></path>
                                          </svg>
             : <svg className="bi bi-x-circle text-danger" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd"></path>
             <path fillRule="evenodd" d="M12.646 13.354l-6-6 .708-.708 6 6-.708.708z" clipRule="evenodd"></path>
             <path fillRule="evenodd" d="M7.354 13.354l6-6-.708-.708-6 6 .708.708z" clipRule="evenodd"></path>
            </svg>
            }
            </li>
                                            <li className="list-group-item">Public Repos: {user.public_repos}</li>
                                            <li className="list-group-item">Public Gists: {user.public_gists}</li>
                                            <li className="list-group-item">Followers: {user.followers}</li>
                                            <li className="list-group-item">Following: {user.following}</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href={user.url} target="_blank" className="card-link">View Full Profile</a>
                                            <a href="#" onClick={() => {this.props = ''; console.log(this.props)}} className="card-link">Close</a>
                                        </div>
              </div>
            
                                </div>
                                )
                }
        
                
                }
            }
            
export default View;
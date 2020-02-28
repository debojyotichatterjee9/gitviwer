import React, { Component } from 'react';
import logo from '../../assets/images/GitHub-Mark-Light-64px.png';
import githubLogo from '../../assets/images/GitHubLogoWhite.png'
import './style.css'

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className ="logoContainer">
                <img src={logo} className="logo" alt="logo" />
                <img src={githubLogo} className="textLogo" alt="logo" />
                </div>
                
                <div className="menuContainer">
                    <p className="text-monospace">Home</p>
                    <p className="text-monospace">About</p>
                    <p className="text-monospace">Close</p>
                </div>
            </header>
        )
    }
}
import React from 'react';
import './element.css'


export class NavBrand extends React.Component {
   
    render() {
        return (<div className="nav-brand">
            <h1>
                <a href="#home">
                    Logo
                </a>
            </h1>
        </div>)
    }
}

export class MenuBar extends React.Component {
    render () {
        return(<div className="menu left">
            <div className="menu-list">
                <ul className="menu-bar">
                    <li className="menu-item"><a href="#home1">Home</a></li>
                    <li className="menu-item"><a href="#home2">About</a></li>
                    <li className="menu-item"><a href="#home3">Service</a></li>
                    <li className="menu-item"><a href="#home4">Contact</a></li>
                </ul>
            </div>
        </div>)
    }
}

export class LogginButton extends React.Component {
    render () {
        return(<div className="loggin-menu">
            <button className="loggin-button"> {this.props.logg} </button>
        </div>)
    }
}
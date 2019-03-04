import React from 'react';
import './fbtopnav.css';
import { FacebookIcon, NavLogginForm, ForgottenAccount, LoginPageForm, RecentLogin } from './facbkelement'

export class FbNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: 'user'}
    }

    render() {
        return(<div className="top-nav">
            <div className="top-nav-l">
                <FacebookIcon />
            </div>
            <div className="top-nav-r">
                <NavLogginForm />
                <ForgottenAccount />
            </div>
        </div>)
    }
}

export class LoginPageBd extends React.Component {
    render() {
        return (<div className="login-page-bkg">
            <RecentLogin />
            <LoginPageForm />
        </div>)
    }
}


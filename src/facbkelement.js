import React from 'react';
import image from "./image/facebook-image-1.png";
import './facbkelement.css';

export class FacebookIcon extends React.Component {
    render() {
        return (<div className="topnav-item">
            <img src={image} alt="facebook logo" className="facebook-image" />
        </div>)
    }
}

export class NavLogginForm extends React.Component {
    render() {
        return (<div className="nav-loggin-form topnav-item">
            <form>
                <div className="nav-form-group">
                    <label>Email or Phone</label>
                    <input />
                </div>
                <div className="nav-form-group">
                    <label>Password</label>
                    <input />
                </div>
                <div className="nav-form-group">
                    <button>Log In</button>
                </div>
            </form>
        </div>)
    }
}

export class ForgottenAccount extends React.Component {
    render() {
        return (<div className="nav-link">
            <a href="forgottenAccount">Forgotten account?</a>
        </div>)
    }
}

export class LoginPageForm extends React.Component {
    render() {
        return(<div className="login-page-body-r">
            <h1 className="heading">Create a new account</h1>
            <p>It's free and always will be.</p>
            <form className="medium-form">
                <div className="form-group">
                    <input className="" placeholder="First Name" />
                    <input className="" placeholder="Surename" />
                    <input className="long" placeholder="Mobile Number or Email Address" />
                    <input className="long" placeholder="Mobile Number or Email Address" />
                </div>
                <p>Birthday </p>
                <select className="birth">
                    <option>Date </option>
                </select>
                <select className="birth">
                    <option>Month </option>
                </select>
                <select className="birth">
                    <option>Year </option>
                </select>
               <div className="gender">
                    <input type="radio" /> Female
                    <input type="radio" /> Male
               </div>
                <span className="condition">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. 
                    You may receive SMS notifications from us and can opt out at any time.
                </span><br />
                <button className="submit">Sign Up</button>
            </form>
             
        </div>)
    }
}

export class RecentLogin extends React.Component {
    render() {
        return(<div>
            <h1>Recent logins</h1>
            <p>Click your picture or add an account.</p>
            <div className="User-image-div">
                <div></div>
            </div>
        </div>)
    }
}
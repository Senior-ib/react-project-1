import React, { Component } from 'react';
import './App.css';
import { FbNav, LoginPageBd } from './fbtopnav'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {logg: 'loggin'}
  }
  render() {
    return (
      <div className="">
        <div>
          <FbNav />
          <LoginPageBd />
        </div>
      </div>
    );
  }
}

export default App;

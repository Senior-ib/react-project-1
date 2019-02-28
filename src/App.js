import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBrand } from './element';
import { MenuBar, LogginButton } from './element';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {logg: 'loggin'}
  }
  render() {
    return (
      <div className="">
        <div>
          <NavBrand />
          <MenuBar />
          <LogginButton logg={this.state.logg} />
        </div>
        <header className="App-header App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

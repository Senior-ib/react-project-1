import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/Home.page';
import AboutPage from './pages/About.page';
import AskPage from './pages/AskSheikh.page';
import DownloadPage from './pages/Downloads.page';
import ContactPage from './pages/Contact.page';
import logo from './logo.svg';
import './App.css';
import { NavBrand } from './element';
import { MenuBar, LogginButton } from './element';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './components/Navbar';
import Banner from './components/elements/Banner.Element';
import SocialHandles from './components/features/SocialHandles';
import Footer from './components/elements/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {logg: 'loggin'} 
  }
  render() {
    return <div className="">
        <Router>
          <SocialHandles />
          <Banner />
          <NavbarMenu styles="navbar-top-menu" />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/ask' component={AskPage} />
            <Route path='/download' component={DownloadPage} />
          </Switch>
          <Footer />
        </Router>
      </div>      
  }
}

export default App;

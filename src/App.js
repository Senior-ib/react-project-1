import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/Home.page';
import AboutPage from './pages/About.page';
import AskPage from './pages/AskSheikh.page';
import DownloadPage from './pages/Downloads.page';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './components/Navbar';
import Banner from './components/elements/Banner.Element';
import SocialHandles from './components/features/SocialHandles';
import Footer from './components/elements/Footer';
import ArticlesPage from './pages/Articles.page';
import ArticlePage from './pages/Article.page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {logg: 'loggin'} 
  }
  render() {
    return <div className="">
        <Router>
          <SocialHandles isRow={true} />
          <Banner />
          <NavbarMenu styles="navbar-top-menu" />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/ask' component={AskPage} />
            <Route path="/articles" component={ArticlesPage} />
            <Route path='/download' component={DownloadPage} />
            <Route path="/article/:id" component={ArticlePage} />
          </Switch>
          <Footer />
        </Router>
      </div>      
  }
}

export default App;

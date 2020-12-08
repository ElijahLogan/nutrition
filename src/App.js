
  
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import NavBar from './NavBar';
import Footer from './Footer';
import Log from './Log';
import Nutrition from './Nutrition';


class App extends Component {
  constructor(props) {
    super(props)
  
  }


  async componentWillMount() {

  }




  render() {
    return (

      <Router>
      <Fragment>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
          <Route exact path='/nutrition' component={Nutrition} />
          <Route exact path='/log' component = {Log} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
    );
  }
}

export default App;


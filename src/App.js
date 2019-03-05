import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddContact from './components/AddContact';
import Navbar from './components/Navbar';
import About from './components/About';
import Contacts from './components/Contacts';
import PageNotFound from './components/PageNotFound';
import {Provider} from './components/context';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Provider>
      <div className="App">
        <Navbar branding="Contact Manager" />
        <br/>
        <Switch>
          <Route exact path="/" component={Contacts} ></Route>
          <Route exact path="/add-contact" component={AddContact} ></Route>
          <Route exact path="/about" component={About} ></Route>
          <Route component={PageNotFound} ></Route>
        </Switch>
      </div>
      </Provider>
      </BrowserRouter>
    );
  }
}

export default App;

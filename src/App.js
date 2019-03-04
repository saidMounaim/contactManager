import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddContact from './components/AddContact';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import {Provider} from './components/context';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Navbar branding="Contact Manager" />
        <br/>
        <AddContact />
        <br/>
        <Contacts />
      </div>
      </Provider>
    );
  }
}

export default App;

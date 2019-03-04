import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from './context';

class Contacts extends Component {

  render() {
    return (
        <Consumer>
            {value => (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        { value.contacts.map(contact => (
                            <Contact key={contact.id} data={contact} />
                        )) }
                        </div>
                    </div>
                </div>                
            )}
        </Consumer>
    )
  }
}

export default Contacts;
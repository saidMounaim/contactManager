import React, { Component } from 'react';
import { Consumer } from './context';

class Contact extends Component {

    state = {
        showContact: true
    }

    showContactToggle = () => {
        this.setState({
            showContact: !this.state.showContact
        })
    } 

    deleteContact = (id, dispatch) => {
        if(window.confirm("Are u sure?")) {
            dispatch({
                type: "DELETE_CONTACT",
                payload: id
            })            
        }
    }

  render() {
    const { id, name, email, phone } = this.props.data;
    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return (
                    <div class="card border-primary mb-3" >
                        <div class="card-header">{name}
                            <i onClick={this.showContactToggle} className="fa fa-sort-down ml-2" ></i>
                            <i onClick={this.deleteContact.bind(this, id, dispatch)} className="fa fa-times float-right" ></i>
                        </div>
                        {(this.state.showContact) ? (
                            <div class="card-body">
                                <h4 class="card-title">Email: {email}</h4>
                                <h4 class="card-title">Phone: {phone}</h4>
                            </div>
                        ) : null}
                    </div>
                )
            }}
        </Consumer>
    )
  }
}

export default Contact;
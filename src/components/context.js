import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                contacts: state.contacts.filter((contact) => contact.id != action.payload)
            };
        case "ADD_CONTACT":
            return {
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
} 

export class Provider extends Component {

    state = {
        contacts: [
            { id: 1, name: "Said Mounaim", email: "smou@gmail.com", phone: "555-555-5555" },
            { id: 2, name: "Ahmed Mounaim", email: "amou@gmail.com", phone: "222-222-2222" },
            { id: 3, name: "Moh Mounaim", email: "mmou@gmail.com", phone: "444-444-4444" },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

  render() {
    return (
     <Context.Provider value={this.state} >
        {this.props.children}
     </Context.Provider>   
    )
  }
}

export const Consumer = Context.Consumer;
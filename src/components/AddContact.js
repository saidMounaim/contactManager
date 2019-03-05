import React, { Component } from 'react';
import {Consumer} from './context';
import InputGroup from './helpers/InputGroup';

class AddContact extends Component {

    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitForm = (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        if (name == "")
        {
            this.setState({errors: {name: "Name can't be empty"}})
            return;
        }

        if (email == "") {
            this.setState({ errors: { email: "Email can't be empty" } })
            return;
        }

        if (phone == "") {
            this.setState({ errors: { phone: "Phone can't be empty" } })
            return;
        }

        dispatch({
            type: "ADD_CONTACT",
            payload: {
                id: 10,
                name: name,
                email: email,
                phone: phone
            }
        })

        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {} 
        })
        this.props.history.push("/");
    }

  render() {
      const {name, email, phone, errors} = this.state;

    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return (
                    <div className="container">
                        <div className="card">
                            <div className="card-header">
                                Add Contact
                            </div>
                            <form onSubmit={this.onSubmitForm.bind(this, dispatch)} >
                            <div class="card-body">
                                <div class="card-text">
                                    <InputGroup 
                                     label="Name"
                                     type="text"
                                     name="name"
                                     value={name}
                                     onChange={this.onChangeInput}
                                     error={errors.name}
                                    />
                                    <InputGroup 
                                     label="Email"
                                     type="email"
                                     name="email"
                                     value={email}
                                     onChange={this.onChangeInput}
                                     error={errors.email}
                                    />
                                    <InputGroup 
                                     label="Phone"
                                     type="text"
                                     name="phone"
                                     value={phone}
                                     onChange={this.onChangeInput}
                                     error={errors.phone}
                                    />
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Add Contact</button>
                                    </div>                
                                </div>
                            </div>
                            </form>
                        </div>        
                    </div>
                )                
            }}
        </Consumer>
    )


  }
}

export default AddContact;
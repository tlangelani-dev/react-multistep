import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Favourites from './Favourites';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        carBrand: '',
        restaurant: ''
    };

    next = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prev = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, carBrand, restaurant } = this.state;
        const values = { firstname, lastname, email, carBrand, restaurant };
        
        switch (step) {
            case 1:
                return <UserDetails
                            next={this.next}
                            handleChange={this.handleChange}
                            values={values}
                        />
            case 2:
                return <Favourites
                            next={this.next}
                            prev={this.prev}
                            handleChange={this.handleChange}
                            values={values}
                        />
            case 3:
                return <Confirm
                            next={this.next}
                            prev={this.prev}
                            values={values}
                        />
            case 4:
                return <Success />
        }
    }
}

export default UserForm;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

class UserDetails extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank you for your support!</h1>
                    <p>One of our consultant will be in contact with you shortly.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default UserDetails;

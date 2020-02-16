import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Favourites extends Component {

    next = e => {
        e.preventDefault();
        this.props.next();
    };

    prev = e => {
        e.preventDefault();
        this.props.prev();
    };
 
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Step 2 - Favourites" />
                    <TextField 
                        hintText="Enter your favourite car brand"
                        floatingLabelText="Car Brand"
                        onChange={handleChange('carBrand')}
                        defaultValue={values.carBrand}
                    />
                    <br />
                    <TextField 
                        hintText="Enter your favourite restaurant"
                        floatingLabelText="Restaurant"
                        onChange={handleChange('restaurant')}
                        defaultValue={values.restaurant}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.next}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.prev}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
};

export default Favourites;

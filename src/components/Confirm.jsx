import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {

    next = e => {
        e.preventDefault();
        this.props.next();
    };

    prev = e => {
        e.preventDefault();
        this.props.prev();
    };
 
    render() {
        const { values } = this.props;
        const { firstname, lastname, email, carBrand, restaurant } = values;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Step 3 - Confirm" />
                    <List>
                        <ListItem 
                            primaryText="Firstname"
                            secondaryText={firstname}
                        />
                        <ListItem 
                            primaryText="Lastname"
                            secondaryText={lastname}
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem 
                            primaryText="Car Brand"
                            secondaryText={carBrand}
                        />
                        <ListItem 
                            primaryText="Restaurant"
                            secondaryText={restaurant}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
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

export default Confirm;

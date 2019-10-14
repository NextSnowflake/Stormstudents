import React, { Component } from 'react';

import { currentUser } from './auth.js'

class Dashboard extends Component {

    componentDidMount() {
        if(!currentUser() ) {
            this.props.history.push("./login");
            return;
        }
    }

    render() {
        return (
            <div>
                Private Contacts Manager Dashboard
            </div>
        );
    }
}

export default Dashboard;
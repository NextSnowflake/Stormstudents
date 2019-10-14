import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dashboard from './Dashboard';
import {currentUser, login, logout} from './auth.js'

const { Header, Content } = Layout;

class App extends Component {

  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: !!currentUser()
    })
  }

  handleLogin = (username, password) => {
    login(username, password)
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogout = (username, password) => {
    logout(username, password)
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Header className="App-header">
              <Row type="flex" justify="space-between"> 
                <Col > 
                  <Link to="/">Contact Manager</Link> 
                </Col>
                <Col> 
                  {!this.state.isLoggedIn && <Link to="/login">Log In</Link>}
                  {this.state.isLoggedIn && <Link to="/" onClick={this.handleLogout}>Log out</Link>}
                </Col>
              </Row>
            </Header>
            <Content className="App"> 
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login" component={(props) => <Login {...props} handleLogin={this.handleLogin} />}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
              </Switch>
            </Content>
          </Layout>
        </Router>
      </div>
    );
  }
}


export default App;

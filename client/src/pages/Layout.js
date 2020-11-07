import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Banner from '../components/Banner';
//import NotificationCenter from '../components/Notification';

import * as authService from '../services/authService';

import Home from './Home';
import ErrorComponent from './Error';


const CONTAINER_STYLE = {
  marginTop: 60,
  minHeight: '80vh',
}

class Layout extends Component {

  state = {
    redirect: false,
  }

  constructor(props) {
    super(props);

    authService.handle403Errors(() => {
      authService.logout();
      this.setState({ redirect: true });
    })
  }

  render() {
    return (
      <div>
        {
          this.state.redirect &&
          <Redirect to={{ pathname: '/login', state: { expired: true } }} />
        }
        <div style={CONTAINER_STYLE}>
          <Banner>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/error" component={ErrorComponent} />
              <Route component={ErrorComponent} />
            </Switch>
          </Banner>
        </div>
      </div>
    );
  }
}

export default Layout;
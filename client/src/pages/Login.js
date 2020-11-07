import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import ActionLockOpen from 'material-ui/svg-icons/action/lock-open';

import Banner from '../components/Banner';
import Loader from '../components/Loader';


import * as authService from '../services/authService';

const BACKGROUND_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '90vh',
}

const LOGIN_STYLE = {
  width: 400,
  margin: 30,
}

const TITLE_LOGIN_STYLE = {
  margin: "10px",
}

const INPUT_LOGIN_STYLE = {
  padding: "16px 24px",
}

function ErrorMessage(props) {
  const style = {
    color: 'red',
    textAlign: 'center',
  }
  return <div style={style}>{props.message}</div>
}

class Login extends Component {

  state = {
    username: 'eee',
    loading: false,
    error: false,
  }

  handleSubmit = (e) => {
    this.setState({ loading: true })
    e.preventDefault();
    const { username } = this.state;
    authService.login(username).then(res => {
      this.props.history.push('/');
    }).catch(err => {
      this.setState({ error: true, loading: false })
    })
  }

  render() {
    const {
      loading,
      error,
    } = this.state;
    const urlState = this.props.location.state;
    return (
      <div>
        <Banner>
          <div style={BACKGROUND_STYLE}>
            <div style={LOGIN_STYLE}>
              <Card zDepth={3}>
                  <form onSubmit={this.handleSubmit}>
                    <CardText style={INPUT_LOGIN_STYLE}>
                        <h1 className="primary-color center" style={TITLE_LOGIN_STYLE}>SCRUM POKER</h1>
                        <TextField
                          hintText="Username"
                          onChange={(e) => this.setState({ username: e.target.value })}
                          fullWidth
                          autoFocus
                          />
                        {
                          error &&
                          <ErrorMessage message="Login Error" />
                        }
                        {
                          urlState && urlState.expired &&
                          <ErrorMessage message="The session expired, please log in." />
                        }
                        <CardActions style={{ textAlign: 'center' }}>
                          <FlatButton
                            type="submit"
                            secondary
                            label="Connection"
                            labelPosition="after"
                            icon={<ActionLockOpen />}
                          />
                        </CardActions>
                    </CardText>
                  </form>
              </Card>
            </div>
          </div>
        </Banner>
      </div>
    );

  }
}

export default Login;
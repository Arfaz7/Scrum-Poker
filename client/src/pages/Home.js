import React, { Component } from 'react';

import StoryList from '../components/StoryList';

class Home extends Component {
    render() {
        return (
          <div>
            <h1>Backlog</h1>
            <br/>
            <StoryList />
          </div>
        )
    }
}

export default Home;
import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import BarCard, { List, StoryCard } from '../BarCard';
import * as storyService from '../../services/storyService';


export default class StoryList extends Component {

    state = {
		storyList: [],
	}

	componentDidMount() {
      this.requestStories()
	}

	requestStories() {
	  storyService.getAllStories().then(res => { this.setState({ storyList: res.data, refreshNeeded: false }); })
	}

	save = (story) => {
      storyService.updateStoryPoint(story)
    }


  render() {

    const { storyList } = this.state;
    return (
      <div>
        <List data={storyList}>
          {
            storyList.map(story => {
              return (
                <BarCard key={story.name} extended>
                  <FlatButton
                    primary
                    label="Save"
                    onTouchStart={this.save(story)}
                  />
                  <StoryCard
                    title={story.name}
                    description={story.description}
                    storypoint={story.storyPoint}
                  />


                </BarCard>
              )
            })
          }
        </List>
      </div>
    )
  }
}
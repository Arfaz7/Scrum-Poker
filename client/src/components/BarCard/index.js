import React from 'react';

import colors from '../../colors';
import TextField from 'material-ui/TextField';


export default function BarCard(props) {

  const BAR_STYLE = {
    display: 'flex',
    borderRadius: 5,
    background: colors.GREY_LIGHT,
    maxWidth: props.extended ? '100%' : 600,
    marginBottom: 10,
  }

  const ACTION_STYLE = {
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    marginRight: 10,
  }


  return (
    <div style={BAR_STYLE}>
      {props.children}
      <div style={ACTION_STYLE}>
        {props.actions}
      </div>
    </div>
  )
}


const STORY_STYLE = {
  padding: 15,
}
const STORY_TITLE_STYLE = {
  fontSize: 20,
  fontWeight: 'normal',
  color: colors.GREY_DARK,
  margin: 0,
  marginBottom: 3,
}
const STORY_DESC_STYLE = {
  margin: 0,
  color: colors.GREY_DARK,
  fontStyle: 'italic',
}


export function StoryCard(props) {
  return (
    <div style={STORY_STYLE}>
      <h1 style={STORY_TITLE_STYLE}>{props.title}</h1>
      <p style={STORY_DESC_STYLE}>{props.description}</p>
      <TextField
        id={props.title}
        defaultValue={props.storypoint}
        floatingLabelText="Story Point"
      />
    </div>
  )
}

export function List(props) {
  if (props.data.length > 0) {
    return <div>{props.children}</div>;
  }
  return <div></div>
}
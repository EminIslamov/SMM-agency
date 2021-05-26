import React from 'react';
import { Divider, ListItem, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteTask from './DeleteTask';

function Task({task}) {
  return (
    <>
      <ListItem button>
      <ListItemText>{task.message}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton color="primary" edge="end" aria-label="delete">
          <DoneIcon />
        </IconButton>
        <DeleteTask id={task._id} />
      </ListItemSecondaryAction>
    </ListItem>
    <Divider />
    </>
  );
}

export default Task;
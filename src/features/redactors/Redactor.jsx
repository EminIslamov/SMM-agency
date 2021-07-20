import React, { useState } from 'react';
import MainAvatar from '../../common /MainAvatar';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from '@material-ui/core';
import DeleteRedactor from './DeleteRedactor';
import { useHistory } from 'react-router';
import AddTask from '../tasks/AddTask';

function Redactor ({ user }) {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const handleDeleteAlertOpen = () => {
    setOpen(true);
  };
  const handleDeleteAlertClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ListItem
        button
        onClick={() => {
          history.push(`agency/posts/${user._id}`);
        }}
      >
        <MainAvatar/>
        <ListItemText primary={`${user.name} ${user.surname}`} />
        <ListItemSecondaryAction>
          <AddTask id={user._id} />
          <Tooltip title='Удалить редактора'>
            <IconButton color='secondary' onClick={handleDeleteAlertOpen}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant='inset' component='li' />
      <DeleteRedactor
        open={open}
        handleClose={handleDeleteAlertClose}
        id={user._id}
      />
    </>
  );
}

export default Redactor;

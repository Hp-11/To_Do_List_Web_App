import React from 'react';
import './Todo1Task.css'
import { List, ListItem, ListItemText } from '@material-ui/core'


function Todo1Task(props) {
    return (
        <List className="todo_List">
            <ListItem>
            <ListItemText primary={props.text} secondary="Dummy Deadline"/>
            </ListItem>
        </List>
        
    )
}

export default Todo1Task
//adding a single row
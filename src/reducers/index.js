import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const tasks = handleActions(
  {
    [actions.addTask](
      state,
      {
        payload: { task }
      }
    ) {
      return { ...state, [task.id]: task };
    },
    [actions.removeTask](
      state,
      {
        payload: { id }
      }
    ) {
      return _.omit(state, id);
    },
    [actions.toggleTaskState](
      state,
      {
        payload: { id }
      }
    ) {
      const task = state[id];
      const newState = task.state === 'active' ? 'finished' : 'active';
      const updatedTask = { ...task, state: newState };
      return { ...state, [task.id]: updatedTask };
    },
    [actions.findTask](
      state,
      {
        payload: { id }
      }
    ) {
      const task = state[id];
      const newState = task.state === 'active' ? 'finished' : 'active';
      const updatedTask = { ...task, state: newState };
      return { ...state, [task.id]: updatedTask };
    }
  },
  {}
);

const newTaskTitle = handleActions(
  {
    [actions.addTask]() {
      return '';
    },
    [actions.updateNewTaskTitle](
      state,
      {
        payload: { title }
      }
    ) {
      return title;
    }
  },
  ''
);

const newTaskText = handleActions(
  {
    [actions.addTask]() {
      return '';
    },
    [actions.updateNewTaskText](
      state,
      {
        payload: { text }
      }
    ) {
      return text;
    }
  },
  ''
);

export default combineReducers({
  tasks,
  newTaskTitle,
  newTaskText
});

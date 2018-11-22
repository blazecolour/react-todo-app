import _ from 'lodash';
import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD', task => ({
  task: { ...task, state: 'active', id: _.uniqueId() }
}));
export const updateNewTaskText = createAction('NEW_TASK_TEXT_UPDATE');
export const updateNewTaskTitle = createAction('NEW_TASK_TITLE_UPDATE');
export const removeTask = createAction('TASK_REMOVE');
export const toggleTaskState = createAction('TASK_STATE_TOGGLE');
export const findTask = createAction('FIND_TASK');

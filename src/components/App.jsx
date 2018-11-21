import React from 'react';
import NewTaskFormContainer from '../containers/NewTaskForm';
import TasksListContainer from '../containers/TasksList';

const App = () => (
  <div className="container mx-auto pt-5 col-5">
    <NewTaskFormContainer />
    <TasksListContainer />
  </div>
);
export default App;

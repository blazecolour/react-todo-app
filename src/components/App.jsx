import React from 'react';
import NewTaskFormContainer from '../containers/NewTaskForm';
import TasksListContainer from '../containers/TasksList';
// import SearchBarContainer from '../containers/SearchBar';

const App = () => (
  <div className="container mx-auto pt-5 col-5">
    <NewTaskFormContainer />
    {/* <SearchBarContainer /> */}
    <TasksListContainer />
  </div>
);
export default App;

import React from 'react';

export default class NewTaskForm extends React.Component {
  addTask = e => {
    e.preventDefault();
    this.props.addTask({
      title: this.props.newTaskTitle,
      text: this.props.newTaskText
    });
  };
  updateNewTaskText = e =>
    this.props.updateNewTaskText({ text: e.target.value });

  updateNewTaskTitle = e =>
    this.props.updateNewTaskTitle({ title: e.target.value });

  render() {
    const { newTaskTitle, newTaskText } = this.props;

    return (
      <form className="form-inline" onSubmit={this.addTask}>
        <div className="form-group mx-sm-3">
          <input
            type="text"
            required
            value={newTaskTitle}
            onChange={this.updateNewTaskTitle}
          />
          <input
            type="text"
            required
            value={newTaskText}
            onChange={this.updateNewTaskText}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Add task
        </button>
      </form>
    );
  }
}

import React from 'react';

export default class SearchBar extends React.Component {
  state = { activeFilter: 'all' };

  findTask(state) {
    this.setState({ activeFilter: state });
  }

  render() {
    const { SearchText } = this.props;
    return (
      <input
        type="text"
        required
        value={SearchText}
        onChange={() => this.findTask(state)}
      />
    );
  }
}

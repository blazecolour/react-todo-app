import { connect } from 'react-redux';
import Component from '../components/SearchBar';
import * as actionCreators from '../actions';

const mapStateToProps = state => {
  const props = { newTaskText: state.newTaskText };
  return props;
};

const Container = connect(
  mapStateToProps,
  actionCreators
)(Component);

export default Container;
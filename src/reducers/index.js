import { combineReducers } from 'redux';
import { Todo } from './Todo';

const allReducers = combineReducers({
  todos: Todo
});

export default allReducers;
import { combineReducers } from 'redux';

import { reducer as todoList } from './todoList';

export default combineReducers({
  todoList,
});

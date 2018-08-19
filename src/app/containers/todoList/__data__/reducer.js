import { combineReducers } from 'redux';
import * as types from './types';

const currentTask = (state = '', action) => {
  switch(action.type) {
    case types.TODO_LIST_CHANGE_FIELD:
      return action.value;
    default:
      return state;
  }
}

const todoItem = (state = {}, action) => {
  switch(action.type) {
    case types.TODO_LIST_COMPLETE_ITEM:
      return { ...state, completed: action.value };
    case types.TODO_LIST_CREATE_ITEM:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch(action.type) {
    case types.TODO_LIST_DELETE_ITEM:
      return [...state];
    case types.TODO_LIST_CREATE_ITEM:
      return [...state, action.id];
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case types.TODO_LIST_DELETE_ITEM:
      return {
        ...state,
      }
    case types.TODO_LIST_COMPLETE_ITEM:
    case types.TODO_LIST_CREATE_ITEM:
      return {
        ...state,
        [action.id]: todoItem(state[action.id], action),
      };
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
  currentTask,
});

import { combineReducers } from 'redux';
import * as types from './types';

const task = (state = '', action) => {
  switch(action.type) {
    case types.TODO_LIST_UPDATE_ITEM:
    case types.TODO_LIST_CREATE_ITEM:
      return '';
    case types.TODO_LIST_EDIT_ITEM:
    case types.TODO_LIST_CHANGE_FIELD:
      return action.value;
    default:
      return state;
  }
}

const active = (state = '', action) => {
  switch(action.type) {
    case types.TODO_LIST_UPDATE_ITEM:
    case types.TODO_LIST_CREATE_ITEM:
      return '';
    case types.TODO_LIST_EDIT_ITEM:
      return action.id;
    default:
      return state;
  }
}

const todoItem = (state = {}, action) => {
  switch(action.type) {
    case types.TODO_LIST_UPDATE_ITEM:
      return { ...state, text: action.value }
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
      // TODO Use immutable instead
      state.splice(state.indexOf(action.id), 1);
      
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
      // TODO Use immutable instead
      delete state[action.id];

      return { ...state };
    case types.TODO_LIST_CREATE_ITEM:
    case types.TODO_LIST_UPDATE_ITEM:
    case types.TODO_LIST_COMPLETE_ITEM:
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
  active,
  task,
});

import uuidv4 from 'uuid/v4';
import * as types from './types';

const localStorage = window.localStorage;

export const receiveItems = () => ({
  type: types.TODO_LIST_RECEIVE_ITEMS,
  allIds: JSON.parse(localStorage.getItem('allIds')),
  byId: JSON.parse(localStorage.getItem('byId')),
});

export const createItem = (text) => ({
  type: types.TODO_LIST_CREATE_ITEM,
  id: uuidv4(),
  text,
});

export const completeItem = (id, value) => ({
  type: types.TODO_LIST_COMPLETE_ITEM,
  value,
  id,
});

export const deleteItem = (id) => ({
  type: types.TODO_LIST_DELETE_ITEM,
  id,
});

export const editItem = (id, value) => ({
  type: types.TODO_LIST_EDIT_ITEM,
  value,
  id,
});

export const updateItem = (id, value) => ({
  type: types.TODO_LIST_UPDATE_ITEM,
  value,
  id,
});

export const changeField = (value) => ({
  type: types.TODO_LIST_CHANGE_FIELD,
  value,
});

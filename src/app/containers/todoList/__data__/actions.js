import uuidv4 from 'uuid/v4';
import * as types from './types';

export const createTodoItem = (text) => ({
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

export const editItem = (id) => ({
  type: types.TODO_LIST_EDIT_ITEM,
  id,
});

export const changeField = (value) => ({
  type: types.TODO_LIST_CHANGE_FIELD,
  value,
});

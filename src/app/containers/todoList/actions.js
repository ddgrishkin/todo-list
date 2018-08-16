import uuidv4 from 'uuid/v4';
import * as types from './types';

export const createTodoItem = (text) => ({
  type: types.TODO_LIST_CREATE_ITEM,
  id: uuidv4(),
  text,
});

export const completeTodoItem = (id) => ({
  type: types.TODO_LIST_COMPLETE_ITEM,
  id,
});

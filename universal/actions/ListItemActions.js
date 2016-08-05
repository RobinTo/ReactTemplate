import types from './ListItemActionTypes';

export function createItem(text) {
  return {
    type: types.CREATE_ITEM,
    text,
    date: Date.now()
  }
}
export function editItem(id, text) {
  return {
    type: types.EDIT_ITEM,
    id,
    text,
    date: Date.now()
  };
}
export function deleteItem(id) {
  return {
    type: types.DELETE_ITEM,
    id
  };
}

import Immutable from 'immutable';
import types from '../actions/ListItemActionTypes';

const defaultState = new Immutable.List();

export default function listItemReducer(state=defaultState, action){
  switch(action.type){
    case types.CREATE_ITEM:
      return state.concat(action.text);
    case types.EDIT_ITEM:
      return state.set(action.id, action.text);
    case types.DELETE_ITEM:
      return state.delete(action.id);
    default:
      return state;
  }
}

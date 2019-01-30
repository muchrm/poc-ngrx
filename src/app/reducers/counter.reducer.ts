import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions';

export const initialState = {
  name: 'demo1',
  counter: 0
};

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return {...state, counter: state.counter + 1};

    case ActionTypes.Decrement:
      return {...state, counter: state.counter - 1};

    case ActionTypes.Reset:
      return {...initialState};

    default:
      return state;
  }
}

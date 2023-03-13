import {createReducer, on} from "@ngrx/store";
import {testActions} from "../actions/test.action";

interface InitialState {
  counter?: number;
}

export const testInitialState: InitialState = {
  counter: 0,
};

export const testReducer = createReducer(
  testInitialState,
  on(testActions.increment, (state, action) => ({
    ...state,
    counter: (state.counter as number + 1)
  }))
);

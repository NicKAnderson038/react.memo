import { createStore, combineReducers } from "redux";
import { CHECK1, CHECK2, DECREMENT, INCREMENT } from "./actionTypes";

const initalState1 = {
  check1: false,
  check2: false
};

function reducer1(state = initalState1, action) {
  switch (action.type) {
    case CHECK1:
      return { ...state, check1: !state.check1 };
    case CHECK2:
      return { ...state, check2: !state.check2 };
    default:
      return state;
  }
}

const initalState2 = {
  counter: 0
};

function reducer2(state = initalState2, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export const store = createStore(combineReducers({ reducer1, reducer2 }));

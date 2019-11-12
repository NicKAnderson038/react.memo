import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHECK1, DECREMENT, INCREMENT } from "./actionTypes";

function Component() {
  const { check1, counter } = useSelector(state => ({
    check1: state.reducer1.check1,
    counter: state.reducer2.counter
  }));
  const dispatch = useDispatch();
  return (
    <div>
      <div>Check1: {check1.toString()}</div>
      <div>
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        Counter: {counter}
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      </div>
      <button onClick={() => dispatch({ type: CHECK1 })}>Check1</button>
    </div>
  );
}

export const ExampleComponent = React.memo(Component)

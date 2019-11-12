import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHECK2 } from "./actionTypes";

const Component = () => {
  const { check2 } = useSelector(state => ({
    check2: state.reducer1.check2
  }));
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <br />
        Check2: {check2.toString()}
      </div>
      <button onClick={() => dispatch({ type: CHECK2 })}>Check2</button>
    </div>
  );
}


export const StoreChanger = React.memo(Component)
import React, { useEffect, useState, Suspense } from "react";
import useFetch from 'fetch-suspense';
import { useDispatch, useSelector } from "react-redux";
import { CHECK1, DECREMENT, INCREMENT } from "./actionTypes";

const MyFetchingComponent = () => {
  const response = useFetch('https://rickandmortyapi.com/api/location');
  console.log(JSON.stringify(response, null, 2 ))
  // const obj = response.map(value=><div>{value.title}</div>)
  return response
};

function Component() {
    useEffect(() => {
      const fetchData = async () => {
        const result = await MyFetchingComponent();
        console.log(result);
      };
      fetchData();
    }, []);

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

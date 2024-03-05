import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/counterSlice";

const ReduxExample = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Redux Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxExample;
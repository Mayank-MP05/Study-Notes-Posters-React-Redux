import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./index";
function App() {
  let counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h3>This is the Simple Counter App</h3>
      <hr />
      <h1>{counter}</h1>
      <hr />
      <button className='btn btn-success' onClick={() => dispatch(increment())}>
        Add
      </button>
      <button className='btn btn-danger' onClick={() => dispatch(decrement())}>
        Minus
      </button>
    </div>
  );
}

export default App;

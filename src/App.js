import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deccrese, increse } from "./redux/actions/counterAction";

const App = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const incr = () => {
    dispatch(increse(5));
  };
  const dcr = () => {
    dispatch(deccrese(5));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block", marginTop: "100px" }}>
        <button
          onClick={(e) => {
            incr();
          }}
        >
          +
        </button>
        <button> {counter.counter} </button>
        <button
          onClick={(e) => {
            dcr();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;

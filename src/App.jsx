import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addNumber, __minusNumber } from "./redux/modules/counterSlice";

const App = () => {
  // 여기에서 store에 접근하여 counter의 값을 가져오려면,
  // useSelector를 사용
  const counter = useSelector((state) => state.counter);

  // dispatch 가져오기
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");

  useEffect(() => {
    console.log("number", number);
  }, [number]);

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            const { value } = e.target;
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch(__addNumber(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(__minusNumber(number));
        }}
      >
        -
      </button>
    </>
  );
};

export default App;

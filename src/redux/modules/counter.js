import { createSlice } from "@reduxjs/toolkit";

// action value
// const PLUS_ONE = "counter/PLUS_ONE";
// const MINUS_ONE = "counter/MINUS_ONE";

// action creator: action value를 return하는 함수
// export const plusOne = (payload) => {
//   return {
//     type: PLUS_ONE,
//     payload,
//   };
// };
// export const minusOne = (payload) => {
//   return {
//     type: MINUS_ONE,
//     payload,
//   };
// };

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서: state에 변화를 일으키는 함수
// state를 action의 type에 따라 변경하는 함수
// 인자값: state, action
// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case PLUS_ONE:
//       return {
//         number: state.number + action.payload,
//       };
//     case MINUS_ONE:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// action creator와 reducer를 한 번에 작성 가능
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      console.log("action ++", action);
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      console.log("action --", action);
      state.number = state.number - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { addNumber, minusNumber } = counterSlice.actions;

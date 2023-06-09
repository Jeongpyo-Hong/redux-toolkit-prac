// 중앙 데이터 관리소(store)를 설정하는 부분
// import { createStore } from "redux";
// import { combineReducers } from "redux";
import counter from "../modules/counter";
import { configureStore } from "@reduxjs/toolkit";

/** AS IS: redux */
// const rootReducer = combineReducers({
//   counter,
// });
// const store = createStore(rootReducer);

/** TO BE: redux-toolkit*/
const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;

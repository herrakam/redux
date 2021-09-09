import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootRedoucer = combineReducers({ counter, todos });

export default rootRedoucer;

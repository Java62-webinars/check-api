import {ipReducer} from "../reducers/ipReducer.ts";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";

export const store = createStore(ipReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof ipReducer>;
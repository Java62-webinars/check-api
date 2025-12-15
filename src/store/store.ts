import {ipReducer} from "../reducers/ipReducer.ts";
import {createStore} from "redux";

export const store = createStore(ipReducer);
export type RootState = ReturnType<typeof ipReducer>;
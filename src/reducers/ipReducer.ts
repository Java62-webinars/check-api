import type {IpInfoType} from "../types/IpInfoType.ts";
import {IP_FAILURE, IP_FROM_HISTORY, IP_REQUEST, IP_SUCCESS} from "../actions/ipActions.ts";

export interface ipState {
    info: IpInfoType | null;
    loading: boolean;
    error: string | null;
    history: IpInfoType [];
};

const initialState: ipState = {
    info: null,
    loading: false,
    error: null,
    history: [],
};

type IpAction = { type: typeof IP_REQUEST }
    | { type: typeof IP_SUCCESS; payload: IpInfoType }
    | { type: typeof IP_FAILURE; payload: string }
    |{ type: typeof IP_FROM_HISTORY; payload: IpInfoType };

export function ipReducer(
    state = initialState,
    action: IpAction
): ipState {
    switch (action.type) {
        case IP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                info: null,
            };
        case IP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                info: null,
            };
            case IP_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    error: null,
                    info: action.payload,
                    history: [...state.history, action.payload],
                }
            }
            case IP_FROM_HISTORY: {
                return {
                    ...state,
                    loading: false,
                    error: null,
                    info: action.payload,
                    history: [...state.history],
                }
            }
        default:
            return state;
    }
}
import type {IpInfoType} from "../types/IpInfoType.ts";

export const IP_REQUEST = 'IP_REQUEST';
export const IP_SUCCESS = 'IP_SUCCESS';
export const IP_FAILURE = 'IP_FAILURE';

export function ipRequest(){
    return {
        type: IP_REQUEST,
    };
}

export function  ipSuccess(data: IpInfoType){
    return {
        type: IP_SUCCESS,
        payload: data,
    }
}

export function ipFailure(error: string){
    return {
        type: IP_FAILURE,
        payload: error,
    }
}


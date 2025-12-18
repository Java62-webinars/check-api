import {ipFailure, ipFromHistory, ipRequest, ipSuccess} from "../actions/ipActions.ts";
import {fetchIpInfo} from "../services/iPservice.ts";

export const lookUpIp = (rawIp: string) =>  async (dispatch, getState) =>{
    const trimmed = rawIp.trim();
    if (!trimmed) {
        dispatch(ipFailure("IP is empty"));
        return;
    }
    const history = getState().history;
    //TODO next webinar
    const existing = history.find((item) => item.ip === ip);
    if (existing) {
        dispatch(ipFromHistory(existing));
        return;
    }
    dispatch(ipRequest());
    try {
        const data = await fetchIpInfo(trimmed);
        dispatch(ipSuccess(data));
    } catch (e) {
        const msg = e instanceof Error ? e.message : "Ошибка запроса";
        dispatch(ipFailure(msg));
    }

}
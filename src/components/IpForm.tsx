import {type FormEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {type RootState, store} from "../store/store.ts";
import {ipFailure, ipRequest, ipSuccess} from "../actions/ipActions.ts";
import {fetchIpInfo} from "../services/iPservice.ts";

const IpForm = () => {
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state: RootState) => state);
    const [ip, setIp] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const trimmed = ip.trim();
        if (!trimmed) return;

        const existing = store. getState().history.find((item) => item.ip === ip);
        if (existing) return;
        dispatch(ipRequest());
        try {
            const data = await fetchIpInfo(trimmed);
            dispatch(ipSuccess(data));
        } catch (e) {
            const msg = e instanceof Error ? e.message : "Ошибка запроса";
            dispatch(ipFailure(msg));
        }
    }


    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
            <label>
                IP-адрес:&nbsp;
                <input
                    type="text"
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    placeholder="Например, 8.8.8.8"
                />
            </label>

            <button type="submit" disabled={loading} style={{ marginLeft: "0.5rem" }}>
                Проверить
            </button>

            {loading && <span style={{ marginLeft: "0.5rem" }}>Загрузка...</span>}

            {error && (
                <div style={{ color: "red", marginTop: "0.5rem" }}>
                    Ошибка: {error}
                </div>
            )}
        </form>
    );
};

export default IpForm;
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function HistoryList() {
    const history = useSelector((state: RootState) => state.history);

    if (history.length === 0) return <div>История запросов пуста.</div>;

    return (
        <div>
            <h2>История запросов</h2>
            <ul>
                {history.map((ip, idx) => (
                    <li key={`${ip}-${idx}`}>{ip}</li>
                ))}
            </ul>
        </div>
    );
}

export default HistoryList;

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function HistoryList() {
    const history = useSelector((state: RootState) => state.history);

    if (history.length === 0) return <div>История запросов пуста.</div>;

    return (
        <div>
            <h2>История запросов</h2>
            <ul>
                {history.map((info, idx) => (
                    <li key={`${idx}`}>
                        <h3>Информация об IP</h3>
                        <ul>
                            <li><strong>IP:</strong> {info.ip}</li>
                            <li><strong>Город:</strong> {info.city}</li>
                            <li><strong>Регион:</strong> {info.region}</li>
                            <li><strong>Страна:</strong> {info.country}</li>
                            <li><strong>Организация:</strong> {info.org}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HistoryList;

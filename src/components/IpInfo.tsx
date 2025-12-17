import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

const IpInfo = () => {
    const {info, loading, error} = useSelector((state: RootState) => state);
    if (loading) return <div>Загружаем данные об IP...</div>;
    if (error) return <div style={{ color: "red" }}>Ошибка: {error}</div>;
    if (!info) return <div>Пока нет данных. Введите IP и нажмите «Проверить».</div>;
//useSelector
    if (loading) return <div>Loading IP info..</div>;
    if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
    if (!info) return <div>No data. Input IP.</div>;

    return (
        <div style={{ marginBottom: "1rem" }}>
            <h2>Информация об IP</h2>
            <ul>
                <li><strong>IP:</strong> {info.ip}</li>
                <li><strong>Город:</strong> {info.city}</li>
                <li><strong>Регион:</strong> {info.region}</li>
                <li><strong>Страна:</strong> {info.country}</li>
                <li><strong>Организация:</strong> {info.org}</li>
            </ul>
        </div>
    );
};

export default IpInfo;
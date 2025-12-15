import {type FormEvent, useContext, useState} from 'react';
import {IpContext, } from "./IpContext.tsx";

const IpForm = () => {
    const ctx = useContext(IpContext);

    const [ip, setIp] = useState("");
    // На случай, если кто-то забудет обернуть App в IpProvider
    if (!ctx) {
        return <div>Error connect to IpProvider</div>;
    }
    const { lookup, loading, error } = ctx;
//useDispatch
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!ip.trim()) return;
        //TODO Validate IP
        await lookup(ip.trim());
    };

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
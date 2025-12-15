import type {IpInfoType} from "../types/IpInfoType.ts";
import {createContext, useState} from "react";
import {fetchIpInfo} from "../services/iPservice.ts";
import * as React from "react";

interface IpContextValue {
  info: IpInfoType | null;
  loading: boolean;
  error: string | null;
  history: string[];
  lookup: (ip: string) => Promise<void>;
}


// eslint-disable-next-line react-refresh/only-export-components
export const IpContext = createContext<IpContextValue|null>(null)

export function IpProvider(props: {children: React.ReactNode }) {
    const [info, setInfo] = useState<IpInfoType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [history, setHistory] = useState<string[]>([]);

    async function lookup(ip: string) {
        setError(null);
        setLoading(true);
        try {
            const data = await fetchIpInfo(ip);
            setInfo(data);
            setHistory((prev) => prev.includes(data.ip) ?
                prev :[data.ip, ...prev]);
        }  catch (e) {
            setError("Error Fetching IP "+ e);
            setInfo(null);
        }
        finally {
            setLoading(false);
        }
    }

    const value: IpContextValue = {
        info,
        loading,
        error,
        history,
        lookup
    }

    return(
        <IpContext value={value}>
            {props.children}
        </IpContext>
    )
}

import type {IpInfoType} from "../types/IpInfo.ts";

const API_BASE_URL= "https://ipapi.co";
interface IpApiResponse {
    ip: string;
    city: string;
    region: string;
    country_name: string;
    org: string;
    [key: string]: unknown;
}

export async function fetchIpInfo(ip: string): Promise<IpInfoType> {
    const response = await fetch(`${API_BASE_URL}/${ip}/json`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data: IpApiResponse = await response.json();
    const result: IpInfoType = {
        ip: data.ip,
        city: data.city,
        region:data.region,
        country: data.country_name,
        org: data.org
    };
    return result;
}
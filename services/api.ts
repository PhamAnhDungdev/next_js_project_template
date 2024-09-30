import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url: string) => {
    const response = await apiClient.get(url);
    return response.data;
};

export const post = async (url: string, data: any) => {
    const response = await apiClient.post(url, data);
    return response.data;
};

export const put = async (url: string, data: any) => {
    const response = await apiClient.put(url, data);
    return response.data;
};

export const del = async (url: string) => {
    const response = await apiClient.delete(url);
    return response.data;
};

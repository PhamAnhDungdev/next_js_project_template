import { get, post } from './api';

export const fetchUser = async (userId: string) => {
    return await get(`/users/${userId}`);
};

export const createUser = async (userData: any) => {
    return await post('/users', userData);
};

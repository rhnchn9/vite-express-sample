import axios from 'axios';
import apiEndpoints from '@/constants/apiEndpoints';
import { IBlog, IBlogParams } from './blogModel';

const blogInstance = axios.create({
    baseURL: apiEndpoints.BASE + apiEndpoints.BLOGS
});

export default {
    async fetchAll (params: IBlogParams) {
        const { data } = await blogInstance.request<IBlog[]>({
            method: 'GET',
            params
        });
        return data;
    },
    
    async fetchById (blogId: string) {
        const { data } = await blogInstance.request<IBlog>({
            method: 'GET',
            url: `/${blogId}`
        });
        return data;
    }
};

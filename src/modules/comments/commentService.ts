import apiEndpoints from '@/constants/apiEndpoints';
import axios from 'axios';
import { IComment, ICommentParams } from './commentModel';

const commentInstance = axios.create({
    baseURL: apiEndpoints.BASE + apiEndpoints.COMMENTS
});

export default {
    async fetchAll (params: ICommentParams) {
        const { data } = await commentInstance.request<IComment>({
            method: 'GET',
            params
        });
        return data;
    }
};

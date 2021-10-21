import { Request, Response } from 'express';
import { IBlogParams } from './blogModel';
import blogService from './blogService';

export default {
    async getAllBlogs (req: Request , res: Response) {
        try {
            const blogs = await blogService.fetchAll(req.query as IBlogParams);
            res.send(blogs);
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: 'Internal server error' });
        }
    },
    
    async getBlogDetails (req: Request, res: Response) {
        try {
            const blogDetails = await blogService.fetchById(req.params.id);
            res.send(blogDetails);
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: 'Internal server error' });
        }
    }
};

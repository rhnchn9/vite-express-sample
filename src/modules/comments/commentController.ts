import { Request, Response } from 'express';
import { ICommentParams } from './commentModel';
import commentService from './commentService';

export default {
    async fetchAllComments (req: Request, res: Response) {
        try {
            const comments = await commentService.fetchAll(req.query as ICommentParams);
            res.send(comments);
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: 'Internal server error' });
        }
    }
};
